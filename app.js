const client = window.supabase && SUPABASE_PUBLISHABLE_KEY !== "PUT_YOUR_SUPABASE_PUBLISHABLE_KEY_HERE"
 ? supabase.createClient(SUPABASE_URL,SUPABASE_PUBLISHABLE_KEY) : null;
const form=document.getElementById('bookingForm'), msg=document.getElementById('msg');
form.addEventListener('submit',async e=>{e.preventDefault();msg.textContent='جاري إرسال الحجز...';
 if(!client){msg.textContent='لم يتم ربط قاعدة البيانات بعد.';return;}
 const {error}=await client.from('bookings').insert([{customer_name:name.value,phone:phone.value,service:service.value,booking_date:date.value,booking_time:time.value,notes:notes.value}]);
 if(error){console.error(error);msg.textContent='حدث خطأ أثناء الحجز ❌';return;}
 msg.textContent='تم إرسال الحجز بنجاح ✅';form.reset();
});
