# 📑 Full API Contract - Project TIBER

Dokumentasi lengkap untuk integrasi Frontend & Backend.
**Base URL:** `http://localhost:8000/api`

---

## 🔐 1. Authentication

### **A. Register & Personalization**
- **Endpoint:** `POST /register`
- **Request:**
```json
{
  "first_name": "Sauki",
  "last_name": "Pratama",
  "email": "sauki@example.com",
  "password": "password123",
  "personalization": {
    "start_date": "2026-01-26",
    "duration_months": 6,
    "reminder_time": "07:00:00",
    "last_checkup_date": null, 
    "control_frequency": 1
  }
}

```

* **Response (201):** `{ "message": "...", "token": "1|abc...", "user": { "id": 1, ... } }`

---

### **B. Login**

* **Endpoint:** `POST /login`
* **Request:** `{ "email": "sauki@example.com", "password": "password123" }`
* **Response (200):** `{ "message": "Login successful", "token": "1|abc...", "user": { "id": 1, "first_name": "Sauki" } }`

---

## 📊 2. Dashboard & Progress

### **A. Dashboard (Data Harian)**

* **Endpoint:** `GET /dashboard`
* **Response (200):**

```json
{
  "user_info": { "full_name": "Sauki Pratama" },
  "stats": {
    "current_streak": 5,
    "progress_percentage": 25.56,
    "next_checkup_days": 5,
    "current_day": 40,
    "total_days": 150 
  },
  "today_task": { "time": "07:00", "is_taken": false, "status": "active" }
}

```

---

### **B. Progress Perjalanan (Milestones)**

* **Endpoint:** `GET /progress`
* **Response (200):**

```json
{
  "current_status": { "current_day": 46, "total_days": 180, "percentage": 25.56, "days_remaining": 134 },
  "milestones": [
    { "label": "Memulai Perjalanan", "day": 1, "is_completed": true },
    { "label": "Fase Awal", "day": 45, "is_completed": true },
    { "label": "Selesai", "day": 180, "is_completed": false }
  ]
}

```

---

## 💊 3. Activities & Logs

### **A. Konfirmasi Minum Obat**

* **Endpoint:** `POST /logs`
* **Request:** `{ "logged_time": "18:05" }`
* **Response (200):** `{ "message": "Log recorded", "new_streak": 6 }`

---

### **B. Konfirmasi Kontrol Dokter**

* **Endpoint:** `POST /personalization/checkup`
* **Request:** `{ "checkup_date": "2026-01-26" }`
* **Response (200):** `{ "message": "...", "next_checkup_date": "2026-02-26" }`

---

### **C. Riwayat Aktivitas (Kalender)**

* **Endpoint:** `GET /activity?filter=weekly`
* **Response (200):**

```json
{
  "summary": { "total_confirmed_days": 4, "consistency_percentage": 57 },
  "calendar_data": [
    { "date": "2026-01-19", "day": "Sen", "status": "missed" },
    { "date": "2026-01-21", "day": "Rab", "status": "confirmed" }
  ]
}

```

---

## ⚙️ 4. Profile & Account

### **A. Ambil Data Profil**

* **Endpoint:** `GET /profile`
* **Response (200):** `{ "user": { "full_name": "Sauki Well", ... }, "settings": { "reminder_time": "08:00:00", ... } }`

---

### **B. Update Settings**

* **Endpoint:** `PUT /profile/settings`
* **Request:** `{ "reminder_time": "07:30:00", "duration_months": 6, ... }`

---

### **C. Ubah Password**

* **Endpoint:** `PUT /profile/password`
* **Request:** `{ "old_password": "...", "new_password": "...", "new_password_confirmation": "..." }`

---

### **D. Logout**

* **Endpoint:** `POST /logout`
* **Response (200):** `{ "message": "Berhasil keluar" }`

---

## ⚠️ 5. Error Handling

| Status | Deskripsi | Format Response |
| --- | --- | --- |
| **422** | **Validation** | `{ "errors": { "email": ["Sudah terdaftar"] } }` |
| **401** | **Unauthorized** | `{ "message": "Invalid login credentials." }` |
| **404** | **Not Found** | `{ "message": "Resource not found." }` |
| **500** | **Server Error** | `{ "message": "Internal Server Error." }` |
