interface Card{
    image : string,
    color: string,
    info: string,
    value: string,
    levels: string
}
const Card = ({image, color, info, value, levels}: Card) => {
  return (
    <div className={`w-full h-full ${color} flex flex-col justify-start items-start gap-2 p-4 rounded-xl`}>
    <img src={image} alt={info} />
    <span>
      <p className="text-[16px]">{info}</p>
        <p className="text-[22px] font-bold mt-[2px]">{value}</p>
    </span>
    <span className="text-[14px]">
        {levels}
    </span>
    </div>
  )
}

export default Card