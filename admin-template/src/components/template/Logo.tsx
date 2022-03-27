export default function Logo() {
  return (
    <div className={`
      flex flex-col items-center justify-center
      w-12 h-12 rounded-full
      bg-white
    `}>
      <div className="h-3 w-3 rounded-full bg-red-600 mb-0.5"/>
      <div className="flex mt-0.5">
        <div className="h-3 w-3 rounded-full bg-yellow-500 mr-0.5"></div>
        <div className="h-3 w-3 rounded-full bg-green-500 ml-0.5"></div>
      </div>
    </div>
  )
}