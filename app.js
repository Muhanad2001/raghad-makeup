const client = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

const form = document.getElementById("bookingForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  msg.textContent = "جاري إرسال الحجز...";

  const { error } = await client
    .from("bookings")
    .insert([{
      customer_name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
      service: document.getElementById("service").value,
      booking_date: document.getElementById("date").value,
      booking_time: "غير محدد",
      notes: document.getElementById("notes").value
    }]);

  if (error) {
    console.error(error);
    msg.textContent = "حدث خطأ: " + error.message;
    return;
  }

  msg.textContent = "تم إرسال الحجز بنجاح ✅";
  form.reset();
});
