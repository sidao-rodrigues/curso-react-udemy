import route from 'next/router';
import { createContext, useEffect, useState } from 'react';
import firebase from '../../firebase/config';
import Usuario from '../../model/Usuario';
import Cookies from 'js-cookie';

interface AppContextProps {
  usuario?: Usuario;
  carregando?: boolean;
  login?: (email: string, senha: string) => Promise<void>;
  cadastrar?: (email: string, senha: string) => Promise<void>;
  loginGoogle?: () => Promise<void>;
  logout?: () => Promise<void>;
}

const AuthContext = createContext<AppContextProps>({});

async function usuarioNormalizado(ususarioFirebase: firebase.User): Promise<Usuario> {
  const token = await ususarioFirebase.getIdToken()
  return {
    uid: ususarioFirebase.uid,
    nome: ususarioFirebase.displayName,
    email: ususarioFirebase.email,
    token,
    provedor: ususarioFirebase.providerData[0].providerId,
    imagemUrl: ususarioFirebase.photoURL
  }
}

function gerenciarCookie(logado: boolean) {
  if(logado) {
    Cookies.set('admin-template-auth', logado, {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template-auth')
  }
}

export function AuthProvider(props) {
  const [carregando, setCarregando] = useState(true);
  const [usuario, setUsuario] = useState<Usuario>(null);

  async function configurarSessao(ususarioFirebase) {
    if(ususarioFirebase?.email) {
      const usuario = await usuarioNormalizado(ususarioFirebase);
      setUsuario(usuario);
      gerenciarCookie(true);
      setCarregando(false);
      return usuario.email;
    } else {
      setUsuario(null);
      gerenciarCookie(false);
      setCarregando(false);
      return false;
    }
  }

  async function loginGoogle() {
    try {
      setCarregando(true);
      const resp = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
      await configurarSessao(resp.user);
      route.push('/');
    } finally {
      setCarregando(false);
    }
  }

  async function login(email, senha) {
    try {
      setCarregando(true);
      const resp = await firebase.auth()
        .signInWithEmailAndPassword(email, senha);
      await configurarSessao(resp.user);
      route.push('/');
    } finally {
      setCarregando(false);
    }
  }

  async function cadastrar(email, senha) {
    try {
      setCarregando(true);
      const resp = await firebase.auth()
        .createUserWithEmailAndPassword(email, senha);
      await configurarSessao(resp.user);
      route.push('/');
    } finally {
      setCarregando(false);
    }
  }

  async function logout() {
    try {
      setCarregando(true);
      await firebase.auth().signOut();
      await configurarSessao(null);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    if(Cookies.get('admin-template-auth')) {
      const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
      return () => cancelar();
    } else {
      setCarregando(false);
    }
  }, [])

  return (
    <AuthContext.Provider value={{
      usuario,
      carregando,
      login,
      cadastrar,
      loginGoogle,
      logout
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext