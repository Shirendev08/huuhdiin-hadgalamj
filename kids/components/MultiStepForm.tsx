"use client"
import { useState, useRef } from 'react';
import Image from 'next/image';
import 'react-phone-number-input/style.css'
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
    gift: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    
    // Check if the target is an HTMLInputElement and if the type is 'file'
    if (e.target instanceof HTMLInputElement && type === 'file') {
      const { files } = e.target; // Access files safely after confirming input type
      if (files && files.length > 0) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: files[0], // Update with the selected file
        }));
      }
    } else {
      // Handle the case for text input or textarea
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value, // Update other fields
      }));
    }
  };
  

  const nextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  // };
  
  const sigCanvas = useRef<SignatureCanvas>(null);

  // Clear the signature pad when the button is clicked
  const clearSignature = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
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

          БОГД БАНКНЫ `&quot;`ИТГЭЛ`&quot;` хүүхдийн хадгаламж нээлгэх заавар.
            </div>
            <br/>
1. Та дараах мэдээллийг бөглөснөөр хадгаламжийн данс нээгдэнэ.  <br/>
2. Таны хадгаламжийн данс нээгдсэний дараа БОГД БАНК-ны зүгээс хадгаламжийн дансны мэдээллийг тань -луу хүргүүлэх болно.  <br/> <br/>
3. Тухайн хадгаламжийн дансны мэдээллийг ашиглан та Ehalamj.mn сайтад хүүхдийн мөнгөн тэтгэмж авах дансаа БОГД БАНКНЫ хадгаламжийн дансны дугаараар солино.  <br/> <br/>
4. Ehalamj.mn -д хүүхдийн мөнгөн тэтгэмж авах дансаа сольсон Screenshot зургийг дараах link-р орж upload хийснээр таны сонгосон бэлэг  <br/> <br/>
            <label htmlFor="register" className='text-[#6835BF] font-bold'>Эцэг эхийн регистрийн дугаар / Parent`&apos;`s Registration Number*</label> <br/> 
    <input
              type="text"
              id="register"
              name="register"
              value={formData.register}
              onChange={handleChange}
              required
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
          <label htmlFor="childRegister" className='text-[#6835BF] font-bold'>Хүүхдийн регистрийн дугаар / Child`&apos;`s Registration Number
          *</label> <br/> 
    <input
              type="text"
              id="childRegister"
              name="childRegister"
              value={formData.childRegister}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-1/3 h-8 p-2.5 dark:bg-purple-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
            />
          </div>
          
          <button type="submit" className='mb-20 flex bg-[#FC8EF2] p-2 rounded-md text-[#6835FB] font-bold'>Next <Image src='/assets/arrowright.png' width={25} height={25} alt='arrow' /></button>
        </form>
      )}

      {step === 4 && (
        <form onSubmit={nextStep}>
           <div className='flex mb-10'>

<Image src='/assets/leftarrow.png' width={25} height={25} alt='arrow' />
<button type="button" onClick={prevStep}>Back</button>
</div>
          <div>
          <label htmlFor="childRegister" className='text-[#6835BF] font-bold text-base'>Холбоо барих мэдээлэл</label> <br/>  <br/>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder='Гар Утас / Mobile Number'
              className='bg-gray-50 border border-gray-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-1/3 h-8 p-2.5 dark:bg-purple-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5'
            />
             <input
              type="email"
              id="email"
              name="email"
              placeholder='Цахим хаяг / Email Address'
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-gray-50 border border-gray-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-1/3 h-8 p-2.5 dark:bg-purple-300 dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-5"
            />
           
          </div>
          <button type="submit" className='mb-20 flex bg-[#FC8EF2] p-2 rounded-md text-[#6835FB] font-bold'>Next <Image src='/assets/arrowright.png' width={25} height={25} alt='arrow' /></button>
        </form>
      )}

      {step === 5 && (
            <form onSubmit={nextStep}>
               <div className='flex mb-10'>

<Image src='/assets/leftarrow.png' width={25} height={25} alt='arrow' />
<button type="button" onClick={prevStep}>Back</button>
</div>
            <div>
            <label htmlFor="childRegister" className='text-[#6835BF] font-bold'>Хүүхдийн төрсний гэрчилгээ / Child`&apos;`s Birth Certificate
            </label> <br/> 
              <div className="flex items-center justify-center w-full">
    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-purple-400 border-dashed rounded-lg cursor-pointer bg-[#fdd8fa]   dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-purple-300  dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" className='bg-[#fdd8fa]' stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-purple-700 dark:text-purple-7000"><span className="font-semibold">Click to choose</span> a file or drag here</p>
            <p className="text-xs text-purple-700 dark:text-purple-700">Size limit 10 MB</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 
             <br/>
            </div>
            <button type="submit" className='mb-20 flex bg-[#FC8EF2] p-2 rounded-md text-[#6835FB] font-bold'>Next <Image src='/assets/arrowright.png' width={25} height={25} alt='arrow' /></button>
          </form>
      )}

      {step === 6 && (
       
         <form onSubmit={nextStep}>
           <div className='flex mb-10'>

<Image src='/assets/leftarrow.png' width={25} height={25} alt='arrow' />
<button type="button" onClick={prevStep}>Back</button>
</div>
         <div>
           <label htmlFor="message">Гарын Үсэг:</label>
           {/* <textarea
             id="message"
             name="message"
             value={formData.message}
             onChange={handleChange}
           ></textarea> */}
          <SignatureCanvas
        ref={sigCanvas}
        penColor="black"
        // value={formData.message}
        // onChange={handleChange}
        canvasProps={{
          width: 500,
          height: 200,
          className: 'sigCanvas bg-pink-100',
        }}
      />

      {/* Clear button positioned in the top-right */}
      <p 
        onClick={clearSignature} 
        style={{
          top: 30, // Adjust spacing as needed
          right: 1/2, // Adjust spacing as needed
          padding: '5px 10px',
          color: 'purple',
          cursor: 'pointer',
        }}>
        Clear
      </p>
        
      
         </div>
         <br/><br/>
         <button type="submit" className='mb-20 flex bg-[#FC8EF2] p-2 rounded-md text-[#6835FB] font-bold'>Next <Image src='/assets/arrowright.png' width={25} height={25} alt='arrow' /></button>
       </form>
      )}

{step === 7 && (
       
       <form onSubmit={nextStep}>
         <div className='flex mb-10'>

<Image src='/assets/leftarrow.png' width={25} height={25} alt='arrow' />
<button type="button" onClick={prevStep}>Back</button>
</div>
       <div>
         
         <p className='text-[#6835BF] font-bold'>Та авах бэлэгний дугаарыг оруулна уу. *</p>
         <p>/MLBB DIAMOND бэлгийг сонгосон тохиолдолд таны утасны дугаар луу SMS-ээр redeem code очих болно./</p>
         <select
  id="gift"
  name="gift"
  value={formData.gift} // Update with your state management
  onChange={handleChange} // Ensure this function handles the dropdown change
  required
  className="bg-gray-50 border border-gray-300 text-purple-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-1/3 h-10 p-2.5 dark:bg-purple-300 dark:focus:ring-blue-500 dark:focus:border-blue-500"
>
  <option value="" disabled>Бэлэгний дугаар сонгох</option>
  <option value="option1">1</option>
  <option value="option2">2</option>
  <option value="option3">3</option>
  <option value="option3">4</option>
</select>
       


      
    
       </div>
       <br/><br/>
       <button type="submit" className='mb-20 flex bg-[#FC8EF2] p-2 rounded-md text-[#6835FB] font-bold'>Next <Image src='/assets/arrowright.png' width={25} height={25} alt='arrow' /></button>
     </form>
    )}
    {step === 8 && (
      <div className=''>
      <Image src='/assets/checked.png' alt='checked' width={100} height={100}/>
      <h1>Thanks for completing this form!</h1>
       </div>
        
    )}
    
    </div>
  );
};

export default MultiStepForm;
