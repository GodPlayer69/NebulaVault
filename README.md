# NebulaVault

![NebulaVault Banner](https://via.placeholder.com/800x200.png?text=NebulaVault)

**NebulaVault** modern ve güvenli bir dijital vault uygulamasıdır. Kullanıcılar verilerini saklayabilir, yönetebilir ve geliştirici/adminler özel erişim ile kullanıcı verilerini görebilir. Proje, HTML/CSS/JS frontend ve Node.js + SQLite backend ile geliştirilmiştir. Arka planda animasyonlu bir nebula efekti ile modern bir tasarım sunar.

---

## 📌 İçerik

- Tek sayfa web uygulaması (SPA)
- Login ve Register popupları
- Admin paneli için Users (DEVELOPERS ONLY) butonu
- SQLite veritabanı ile kullanıcı yönetimi
- Modern tasarım ve hareketli nebula arka plan
- Responsive ve mobil uyumlu

---

## 🚀 Özellikler

### Kullanıcı

- Kayıt olma ve giriş yapma
- Şifreler bcrypt ile hashlenir
- Login/Register popup’ları animasyonlu (fade-in/fade-out)
- Mobil uyumlu ve responsive tasarım

### Admin / Geliştirici

- **Users (DEVELOPERS ONLY)** butonu ile kullanıcı listesi görüntüleme
- Admin şifre: `1234`
- JSON benzeri listeleme ile kullanıcı ID ve username bilgisi
- Sadece şifre doğrulaması sonrası erişim

### Tasarım

- Fullscreen canvas ile hareketli nebula arka plan
- Gradient partiküller ve yumuşak bulut efektleri
- Butonlar ve popup’lar modern, gölge ve hover efektleri ile tasarlandı

---

## 🛠️ Teknolojiler

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** SQLite
- **Güvenlik:** bcrypt ile şifreleme, admin şifre kontrolü
- **Animasyon:** Canvas API ile hareketli nebula efekti

---

## 📂 Dosya Yapısı

```
NebulaVault/
│
├─ public/
│   ├─ css/
│   │   └─ style.css          # Site tasarımı ve responsive
│   ├─ js/
│   │   ├─ script.js          # Login/Register/Admin logic
│   │   └─ nebula.js          # Animasyonlu nebula arka plan
│   └─ index.html             # Tek sayfa site
│
├─ database/
│   └─ nebula.db              # SQLite veritabanı
│
├─ server.js                  # Node.js + Express sunucu
├─ package.json               # Proje bağımlılıkları ve scriptler
└─ README.md                  # Bu dosya
```

---

## ⚡ Kurulum

1. Node.js ve npm kurulu olduğundan emin olun:

   ```bash
   node -v
   npm -v
   ```

2. Proje klasörüne gidin ve bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

3. Sunucuyu başlatın:

   ```bash
   node server.js
   ```

4. Tarayıcıda açın:

   ```
   http://localhost:3000
   ```

---

## 📝 Kullanım

### Kullanıcı

1. **Register** butonuna tıklayın, kullanıcı adı ve şifre girin.
2. **Login** ile giriş yapın.
3. Giriş sonrası basit bir mesaj veya içerik gösterebilirsiniz.

### Admin / Geliştirici

1. **Users (DEVELOPERS ONLY)** butonuna tıklayın.
2. Şifre olarak **1234** girin.
3. Tüm kullanıcılar listelenecek.

---

## 🎨 Nebula Efekti

- **Canvas API** ile oluşturuldu.
- 250 adet renkli partikül rastgele hareket ediyor.
- Gradient ile yumuşak bulut efekti sağlanıyor.
- Responsive ve full-screen destekli.

---

## 🔒 Güvenlik

- Şifreler **bcrypt** ile hashlenir, veritabanında düz metin yok.
- Admin paneli sadece şifre ile korunur.
- Geliştirici erişimi **DEVELOPERS ONLY** etiketi ile belirtildi.
- Frontend ve backend arasında JSON üzerinden iletişim sağlanır.

---

## 🛠️ Geliştirici Notları

- `server.js` içindeki `PORT` numarası değiştirilebilir.
- Admin şifresi `script.js` dosyasında ayarlanmıştır.
- Nebula partikül sayısı ve renkleri `nebula.js` dosyasında değiştirilebilir.
- Daha fazla güvenlik için HTTPS ve JWT eklenebilir.
- Veritabanı SQLite olduğu için dosya tabanlıdır; küçük ve hızlı prototipler için uygundur.

---

## 🔮 Gelecek Özellikler

- Kullanıcı dashboard paneli
- Dosya yükleme ve saklama
- Kullanıcı aktivitelerini loglama
- Çoklu admin rolü ve yetkilendirme
- Nebula renk ve efektleri dinamik olarak değiştirilebilir

---

## 📌 Lisans

Bu proje **özgür kullanım** içindir. Ticari veya eğitim amaçlı kullanılabilir, değiştirebilir ve geliştirebilirsiniz.

---

**NebulaVault** ile dijital verileriniz artık daha güvenli ve modern bir ortamda! 🌌
