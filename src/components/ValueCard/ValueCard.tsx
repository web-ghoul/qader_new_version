import { ValueCardTypes } from "@/types/components.types"

const ValueCard = ({ title, content }: ValueCardTypes) => {
  return (
    <div
    className="card flex  flex-col gap-5 rounded-2xl p-7.5 bg-blue100 md:bg-white hover:bg-blue100 duration-500"
    data-animation="card"
  >
    <div className="p-2.5 mx-auto text-center  xl w-fit rounded-xl bg-blue600">
      <span className="text-white"> {title}</span>
    </div>

    <p className="opacity-80">{content}</p>
  </div>
  )
}

export default ValueCard