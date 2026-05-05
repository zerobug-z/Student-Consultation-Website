"use client"
import { FormEvent, useState } from "react"

export const ContactForm = ()=>{

    const[fullName, setFullName]=useState('')
    const[email, setEmail]=useState('')
    const[phone, setPhone]=useState('')
    const[status, setStatus]=useState('')
    const[currentDepartment, setCurrentDepartment]=useState('')
    const[targetDepartment, setTargetDepartment]=useState('')
    const[message, setMessage]=useState('')

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName,
                email,
                status,
                currentDepartment,
                targetDepartment,
                phone,
                message
            })
        })

        const result = await res.json()
        console.log("API Response:", result)
    }

    return(
        <form onSubmit={onSubmit}>
            <label htmlFor="ad-soyad">Ad Soyad:</label><br />
            <input 
                onChange={(e) =>setFullName(e.target.value)} 
                value={fullName} 
                type="text" 
                id="ad-soyad" 
                name="adSoyad" 
                required 
                placeholder="Ad Soyad:" 
            /><br /><br />

            <label htmlFor="email">E-posta:</label><br />
            <input 
                onChange={(e) =>setEmail(e.target.value)} 
                value={email} 
                type="email" 
                required 
                id="email" 
                name="email"
            /><br /><br />

            <label htmlFor="phone">Telefon Numarası:</label><br />
            <input 
                onChange={(e) =>setPhone(e.target.value)} 
                value={phone} 
                type="tel" 
                name="phone" 
                id="phone"
            /><br /><br />

            <label htmlFor="durum">Egitim Durumunuz:</label><br />
            <select 
                onChange={(e) =>setStatus(e.target.value)} 
                value={status}
                required 
                name="durum" 
                id="durum"
            >
                <option value="">Seçiniz</option>
                <option value="bachelor-student">Lisans Öğrencisi</option>
                <option value="bachelor-graduate">Lisans Mezunu</option>
                <option value="associate-student">Ön Lisans Öğrencisi</option>
                <option value="associate-graduate">Ön Lisans Mezunu</option>
                <option value="grade-12">12. Sınıf</option>
                <option value="none">Hicbiri</option>
            </select><br /><br />

            <label htmlFor="currentDepartment">Okudugunuz Bölüm:</label>
            <input 
                onChange={(e) =>setCurrentDepartment(e.target.value)} 
                value={currentDepartment}
                type="text" 
                name="currentDepartment" 
                id="currentDepartment"
            /><br /><br />

            <label htmlFor="targetDepartment">Hedefinizdeki Bölüm:</label>
            <input 
                required 
                onChange={(e) =>setTargetDepartment(e.target.value)} 
                value={targetDepartment}
                type="text" 
                name="targetDepartment" 
                id="targetDepartment"
            /><br /><br />

            <label htmlFor="message">Mesajiniz:</label>
            <textarea 
                name="message" 
                onChange={(e) =>setMessage(e.target.value)} 
                value={message}
                id="message" 
                rows={5} 
                placeholder="Size nasıl yardımcı olabiliriz?" 
                required
            />

            <br /><br />
            <button type="submit">Gönder</button>
        </form>
    )
}
