"use client"
import { useState } from 'react';
import Image from 'next/image';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import ReactDOM from 'react-dom'
import SignatureCanvas from 'react-signature-canvas'
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    register: '',
    childRegister: '',
    email: '',
    phone: '',
    birthCertificate: null,
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0], // Update birthCertificate with the selected file
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value, // Update other fields
      }));
    }
  };
   
  };

  const nextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  

  return (

    <div className=' mt-20 absolute sm:left-1/4 sm:right-1/4 left-5 right-5 text-[#6835BF]'>
      {step === 1 && (
        <form onSubmit={nextStep}>
          {/* <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div> */}
          <div className='default-text '>
            <span className='underlined-text'>Хүүхдийн хадгаламж</span> <br />
            Хүүхдийн мөнгөн тэтгэмжээ Богд банкны жилийн 14.2%-ийн хүүтэй “Итгэл” Хүүхдийн хугацаатай хадгаламждаа хүлээн аваад дараах бэлгийн эзэн болоорой.
            <br /><br />
            <span className='default-big-text'>
              Шинэ төрсөн нярайн хүүхдийн мөнгөний данс холбох алхмууд:
            </span>
            <br />
            <br />

            <a href="" className='underline font-semibold'>
              Алхам 1: Та Хүүхдийн нэрийн данс (бүрдүүлэх материал) эсвэл Хүүхдийн харилцах дансыг (бүрдүүлэх материал) Богд банкны өөрт ойр байрлах салбарт ирж нээлгэнэ.
            </a> <br /> <br />
            <a href="" className='underline font-semibold'>
              Алхам 2: www.ehalamj.mn шинээр бүртгүүлж нэвтрээд, дансыг холбоно.
            </a>
            <br />
            <br />
            <div className="relative w-full h-0 pb-[58.33%]">

              <iframe className="absolute top-0 lefxt-0 w-full h-full" src="https://www.youtube.com/embed/hFVzEjwQSUE?si=BUZ7bT15Pohkx2uO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <br />
            <span className='default-big-text'>
              Хүүхдийн мөнгөн тэтгэмж хүлээн авдаг дансаа Богд банкны хүүхдийн хадгаламж болгож солих алхмууд:
            </span>
            <br />

            <br />
            <a href="" className='underline '>
              Алхам 1: Богд банкны “Итгэл” хүүхдийн хадгаламжийн дансыг Богд банкны салбарт ирж нээлгэнэ.
            </a> <br />
            <br />

            <a href="" className='underline '>
              Алхам 2: www.ehalamj.mn сайт руу нэвтрэн, “Өрх” цэс дээр даран “Хүүхдийн мэдээлэл бүртгэх” товчийг дарна.
            </a>
            <br />
            <br />
            <div className="relative w-full h-auto mb-5">
              <Image src='/assets/zaavar1.jpg' alt='zaavar1' width={900} height={300} className='w-full h-auto' />
            </div>
            <a href="" className='underline '>
              Алхам 3: Дараах байдлаар хүүхдийн мэдээлэл харагдах ба “Данс холбох” товчийг дарна.
            </a>
            <br />
            <br />
            <div className="relative w-full h-auto">

              <Image src='/assets/zaavar2.jpg' alt='zaavar1' width={900} height={300} className='w-full h-auto mb-5' />
            </div>
            <a href="" className='underline '>
              Алхам 4: “Данс холбох” цэсийг дарж, Хүүхдийн мөнгөн тэтгэмж авах гэж буй Богд банкны дансыг сольж, шинэчлэнэ.
            </a> <br /> <br />
            <div className="relative w-full h-auto">

              <Image src='/assets/zaavar3.jpg' alt='zaavar1' width={900} height={300} className='w-full h-auto mb-5' />
            </div>
            <span className="default-big-text underline italic">
              Хэрэв та БОГД БАНКНЫ хадгаламжийн дансгүй бол NEXT дарж хадгаламжийн дансаа зайнаас нээлгэх боломжтой.
            </span> <br />
          </div>
          <br />
          <button type="submit" className='mb-20 flex bg-[#FC8EF2] p-2 rounded-md text-[#6835FB] font-bold'>Next <Image src='/assets/arrowright.png' width={25} height={25} alt='arrow' /></button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={nextStep}>
          <div className='flex mb-10'>

          <Image src='/assets/leftarrow.png' width={25} height={25} alt='arrow' />
          <button type="button" onClick={prevStep}>Back</button>
          </div>

          <div className='text-[#6835BF]'>
            <div className=' font-bold'>

          БОГД БАНКНЫ "ИТГЭЛ" хүүхдийн хадгаламж нээлгэх заавар.
            </div>
            <br/>
1. Та дараах мэдээллийг бөглөснөөр хадгаламжийн данс нээгдэнэ.  <br/>
2. Таны хадгаламжийн данс нээгдсэний дараа БОГД БАНК-ны зүгээс хадгаламжийн дансны мэдээллийг тань -луу хүргүүлэх болно.  <br/> <br/>
3. Тухайн хадгаламжийн дансны мэдээллийг ашиглан та Ehalamj.mn сайтад хүүхдийн мөнгөн тэтгэмж авах дансаа БОГД БАНКНЫ хадгаламжийн дансны дугаараар солино.  <br/> <br/>
4. Ehalamj.mn -д хүүхдийн мөнгөн тэтгэмж авах дансаа сольсон Screenshot зургийг дараах link-р орж upload хийснээр таны сонгосон бэлэг  <br/> <br/>
            <label htmlFor="register" className='text-[#6835BF] font-bold'>Эцэг эхийн регистрийн дугаар / Parent's Registration Number*</label> <br/> 
    <input
              type="text"
              id="register"
              name="register"
              value={formData.register}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-1/3 h-8 p-2.5 dark:bg-purple-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
            />
          </div>

          <button type="submit" className='mb-20 flex bg-[#FC8EF2] p-2 rounded-md text-[#6835FB] font-bold'>Next <Image src='/assets/arrowright.png' width={25} height={25} alt='arrow' /></button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={nextStep}>
           <div className='flex mb-10'>

<Image src='/assets/leftarrow.png' width={25} height={25} alt='arrow' />
<button type="button" onClick={prevStep}>Back</button>
</div>
          <div>
          <label htmlFor="childRegister" className='text-[#6835BF] font-bold'>Хүүхдийн регистрийн дугаар / Child's Registration Number
          *</label> <br/> 
    <input
              type="text"
              id="childRegister"
              name="childRegister"
              value={formData.childRegister}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-1/3 h-8 p-2.5 dark:bg-purple-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
            />
          </div>
          
          <button type="submit" className='mb-20 flex bg-[#FC8EF2] p-2 rounded-md text-[#6835FB] font-bold'>Next <Image src='/assets/arrowright.png' width={25} height={25} alt='arrow' /></button>
        </form>
      )}

      {step === 4 && (
        <form onSubmit={nextStep}>
          <div>
          <label htmlFor="childRegister" className='text-[#6835BF] font-bold'>Холбоо барих мэдээлэл</label> <br/> 
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
             <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-1/3 h-8 p-2.5 dark:bg-purple-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
            />
           
          </div>
          <button type="button" onClick={prevStep}>Back</button>
          <button type="submit" className='mb-20 flex bg-[#FC8EF2] p-2 rounded-md text-[#6835FB] font-bold'>Next <Image src='/assets/arrowright.png' width={25} height={25} alt='arrow' /></button>
        </form>
      )}

      {step === 5 && (
            <form onSubmit={nextStep}>
            <div>
            <label htmlFor="childRegister" className='text-[#6835BF] font-bold'>Хүүхдийн төрсний гэрчилгээ / Child's Birth Certificate
            </label> <br/> 
               <input
                type="file"
                id="email"
                name="email"
                value={formData.birthCertificate}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-1/3 h-8 p-2.5 dark:bg-purple-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
              />
             
            </div>
            <button type="button" onClick={prevStep}>Back</button>
            <button type="submit" className='mb-20 flex bg-[#FC8EF2] p-2 rounded-md text-[#6835FB] font-bold'>Next <Image src='/assets/arrowright.png' width={25} height={25} alt='arrow' /></button>
          </form>
      )}

      {step === 6 && (
        <div>
          <h1>Thanks for submitting the form!</h1>
        </div>
      )}
      {step === 7 && (
         <form onSubmit={handleSubmit}>
         <div>
           <label htmlFor="message">Гарын Үсэг:</label>
           {/* <textarea
             id="message"
             name="message"
             value={formData.message}
             onChange={handleChange}
           ></textarea> */}
            <SignatureCanvas penColor='black' 
   canvasProps={{width: 500, height: 200, className: 'sigCanvas bg-white'}} />
         </div>
         <button type="button" onClick={prevStep}>Back</button>
         <button type="submit" className='mb-20 flex bg-[#FC8EF2] p-2 rounded-md text-[#6835FB] font-bold'>Next <Image src='/assets/arrowright.png' width={20} height={20} alt='arrow' /></button>
       </form>
      )}
    </div>
  );
};

export default MultiStepForm;
