"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
const Firstpage = () => {
    return (
        <div className='default-text '>
            <span className='underlined-text'>Хүүхдийн хадгаламж</span> <br />
            Хүүхдийн мөнгөн тэтгэмжээ Богд банкны жилийн 14.2%-ийн хүүтэй “Итгэл” Хүүхдийн хугацаатай хадгаламждаа хүлээн аваад дараах бэлгийн эзэн болоорой.
            <br/>
            <span className='default-big-text'>
                Шинэ төрсөн нярайн хүүхдийн мөнгөний данс холбох алхмууд:
            </span>
            <br/>
            <a href="">
                Алхам 1: Та Хүүхдийн нэрийн данс (бүрдүүлэх материал) эсвэл Хүүхдийн харилцах дансыг (бүрдүүлэх материал) Богд банкны өөрт ойр байрлах салбарт ирж нээлгэнэ.
            </a> <br />
            <a href="">
                Алхам 2: www.ehalamj.mn шинээр бүртгүүлж нэвтрээд, дансыг холбоно.
            </a>
            <iframe width="362px" height="204px" src="https://www.youtube.com/embed/hFVzEjwQSUE?si=BUZ7bT15Pohkx2uO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <span className='default-big-text'>
                Хүүхдийн мөнгөн тэтгэмж хүлээн авдаг дансаа Богд банкны хүүхдийн хадгаламж болгож солих алхмууд:
            </span>
            <br/>
            <a href="">
                Алхам 1: Богд банкны “Итгэл” хүүхдийн хадгаламжийн дансыг Богд банкны салбарт ирж нээлгэнэ.
            </a> <br />
            <a href="">
                Алхам 2: www.ehalamj.mn сайт руу нэвтрэн, “Өрх” цэс дээр даран “Хүүхдийн мэдээлэл бүртгэх” товчийг дарна.
            </a>
            <Image src='/assets/zaavar1.jpg' alt='zaavar1' width={900} height={300} className='w-2/3 h-auto'/>
            <a href="">
            Алхам 3: Дараах байдлаар хүүхдийн мэдээлэл харагдах ба “Данс холбох” товчийг дарна.
            </a>
            <Image src='/assets/zaavar3.jpg' alt='zaavar1' width={900} height={300} className='w-2/3 h-auto'/>
            <a href="">
            Алхам 4: “Данс холбох” цэсийг дарж, Хүүхдийн мөнгөн тэтгэмж авах гэж буй Богд банкны дансыг сольж, шинэчлэнэ.
            </a> <br/>
            <span className="default-big-text">
            Хэрэв та БОГД БАНКНЫ хадгаламжийн дансгүй бол NEXT дарж хадгаламжийн дансаа зайнаас нээлгэх боломжтой.
            </span> <br/>

            <button className=''>Next</button>
        </div>
    )
}

export default Firstpage
