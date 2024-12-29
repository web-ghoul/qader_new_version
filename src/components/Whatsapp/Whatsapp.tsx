import { FaWhatsapp } from 'react-icons/fa'
const Whatsapp = () => {
  return (
    <a
      href={
        'https://api.whatsapp.com/send/?phone=%2B201208822401&text&type=phone_number&app_absent=0'
      }
      target={'_blank'}
      className="fixed bottom-[80px] right-[20px] bg-[#25d366] w-[50px] h-[50px] rounded-full text-white flex justify-center items-center z-[1000]"
    >
      <FaWhatsapp className="text-white text-3xl" />
    </a>
  )
}

export default Whatsapp
