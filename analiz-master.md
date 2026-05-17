# Analiz Master — Proje Gereksinim Analizi

> **Proje:** fee-track  
> **Tarih:** 2026-05-17  
> **Hazırlayan:** Claude Code (claude-sonnet-4-6)

---

## 1. RAUND ANALİZİ — Özet (Sorular 1–10)

| # | Soru | Cevap |
|---|------|-------|
| 1 | Projenin amacı | Sabit giderleri olan kişilerin giderlerini ekleyip görüntüleyeceği mobil uygulama |
| 2 | Çözülen problem | Farklı yerlerde dağınık halde tutulan giderleri tek noktada toplamak |
| 3 | "fee-track" anlamı | Sabit/abonelik giderlerini takip etmek |
| 4 | Mevcut geliştirme | Sıfırdan başlıyor; benzer örnekler mevcut |
| 5 | MVP özellikleri | 10+ platformdan para türü seçerek tüm maliyetleri tek sayfada göstermek |
| 6 | Hedef kitle | Genel kullanıma açık (public) |
| 7 | Rakip/ilham | Bobby uygulaması |
| 8 | Başarı ölçümü | Kullanım oranı artışı ve söyleneni yapması |
| 9 | Bağımsızlık | Tam bağımsız uygulama |
| 10 | Yayın tarihi | Çok yakın (MVP hızla çıkarılmak isteniyor) |

**Çıkarımlar:**
- Bobby benzeri bir **abonelik/sabit gider takip** uygulaması
- **Bireysel** kullanıcılara yönelik **mobil** uygulama
- Netflix, Spotify gibi **platform aboneliklerini** tek ekranda toplamak temel hedef
- Hızlı MVP çıkarmak öncelik

---

## 2. RAUND — Kalan Sorular

> Bağlam dışına düşen sorular çıkarıldı. Lütfen aşağıdaki cevap alanlarını doldur.

---

### Kullanıcılar (11–15, 18)

**11. Uygulamanın birincil kullanıcısı kim? Bireysel kullanıcı mı, yoksa aile/ekip hesabı da olacak mı?**

**Cevap:**

---MVP sürüm olarak birincil kişisel kullanım olacak

**12. Günlük aktif kullanıcı hedefi nedir? (örn: ilk 3 ayda 500 kullanıcı)**

**Cevap:**

---ayda 300

**13. Hedef kullanıcı kitlesi teknik açıdan nasıl? Uygulamayı kolayca kullanabilmeli mi?**

**Cevap:**

---Uygulama basit ama kullanışlı olmalı sol yukarda ekle olmalı sonra ordan var olan en çok kullanılan ve tümü seçenekleri ile platform seçmeli ordan ekleme yapmalı istediği yere veya özel bir ekleme yaparak kendi özel ödemesini adlandırıp ekleyebilmeli

**14. Farklı hesap rolleri olacak mı? (örn: aile paylaşımı, ortak bütçe görüntüleme)**

**Cevap:**

---su an gerek yok

**15. Kullanıcılar uygulamaya nasıl giriş yapacak? (Google, Apple, e-posta/şifre)**

**Cevap:**

---Google e postası ile giris yapsınlar

**18. Kullanıcılar giderlerini başkasıyla paylaşabilecek mi? (paylaşım, bildirim, davet)**

**Cevap:**

---Olur paylaşssın

### Temel İş Mantığı (21–30)

**21. Takip edilecek gider türleri neler? Yalnızca dijital abonelikler mi (Netflix, Spotify), yoksa kira, fatura, sigorta gibi fiziksel giderler de mi?**

**Cevap:**

---Evet aklına gelecek tüm giderler olmalı

**22. Hangi para birimleri desteklenecek? Kullanıcı para birimini kendin mi seçiyor, yoksa konuma göre otomatik mi?**

**Cevap:**

---Kendisi seçecek tl euro dolar dinar yeterli su an

**23. Giderler yalnızca manuel mi girilecek, yoksa banka/kart entegrasyonu da düşünülüyor mu?**

**Cevap:**

---elle manuel girilecek

**25. Abonelikler aylık/yıllık döngüde mi takip edilecek? Ödeme tarihi hatırlatması gelecek mi?**

**Cevap:**

---hatırlatma olmalı hem aylık hem yıllık olmalı kullanıcı ekleme yaparken seçmeli

**26. Giderlere kategori veya etiket atanabilecek mi? (örn: eğlence, fatura, ulaşım)**

**Cevap:**

---evet olmalı dijital uygulamalar, fatura, ulaşım, eğlence gibi

**27. Fatura veya makbuz fotoğrafı ekleme özelliği MVP'de olacak mı?**

**Cevap:**

--- hayır olmayacak

**28. Ana ekranda ne gösterilecek? Aylık toplam mı, platforma göre liste mi, grafik mi?**

**Cevap:**

---hepsini ayrı ayrı gösteerecek sekilde sayfalar yapalım

**29. Bütçe limiti tanımlama ve aşım uyarısı gerekiyor mu?**

**Cevap:**

---hayır

**30. Verileri dışa aktarma (PDF, CSV) MVP kapsamında mı?**

**Cevap:**

---pdf olarak kaydedebilsin anlık giderlerini

### Teknik (31, 33, 34, 37, 38, 39, 40)

**31. Tercih ettiğin teknoloji yığını nedir? (örn: React Native, Flutter, Swift/Kotlin)**

**Cevap:**

---react native

**33. Backend/sunucu için tercih var mı? (Firebase, Supabase, kendi sunucu)**

**Cevap:**

---supabase olsun

**34. Veritabanı için bir tercih var mı? (yerel SQLite, bulut tabanlı)**

**Cevap:**

---supabase

**37. Ödeme tarihi yaklaştığında bildirim (push notification) gelecek mi?**

**Cevap:**

---evet olmalı

**38. Uygulama içi fotoğraf/belge yükleme düşünülüyorsa dosya boyutu kısıtı var mı?**

**Cevap:**

--- belge yükleme olmayacak

**39. Hedef platformlar iOS mu, Android mi, yoksa ikisi birden mi?**

**Cevap:**

---android

**40. İnternet olmadan da uygulama çalışabilmeli mi? (offline mod)**

**Cevap:**

---evet

### Güvenlik (41, 42, 44, 45)

**41. Kullanıcı verilerinde KVKK/GDPR uyumu gerekiyor mu?**

**Cevap:**

---evet

**42. Finansal veri saklarken özel bir güvenlik standardı (PCI-DSS vb.) bekleniyor mu?**

**Cevap:**

---evet

**44. Veriler nerede saklanacak? (Türkiye'de mi olması şart?)**

**Cevap:**

---database de

**45. İki faktörlü doğrulama (2FA) MVP'de olacak mı?**

**Cevap:**

---hayur

### Takım ve Süreç (47, 49, 51, 52)

**47. Projede kaç kişi çalışıyor?**

**Cevap:**

---osman tat tek basına

**49. Kaynak kod nerede tutulacak? (GitHub, GitLab, vb.)**

**Cevap:**

---github

**51. Test yazılması bekleniyor mu? (unit test, manuel test)**

**Cevap:**

---evet

**52. Proje dili Türkçe mi, İngilizce mi? (kod, yorum, dokümantasyon)**

**Cevap:**

---türkçe

### Bütçe ve Kısıtlar (53–58)

**53. Geliştirme bütçesi var mı? Varsa kısıt nedir?**

**Cevap:**

---bütçe yok su an

**54. Kullanmak istemediğin veya lisans kısıtı olan bir teknoloji var mı?**

**Cevap:**

---yok

**55. MVP için hedeflenen geliştirme süresi ne kadar?**

**Cevap:**

---2 gün

**56. Bulut servisleri veya üçüncü taraf araçlar için aylık bütçe var mı?**

**Cevap:**

---

**57. Açık kaynak mı olacak, yoksa kapalı kaynak mı?**

**Cevap:**

---

**58. Fazlara bölünecek mi? (Faz 1 MVP, Faz 2 ek özellikler)**

**Cevap:**

---

### Görsel / UX (59–60)

**59. Renk paleti veya marka tercihin var mı? Koyu tema (dark mode) şart mı?**

**Cevap:**

--- açık tema olacak

**60. Hazır bir tasarım/mockup var mı? Yoksa tasarım sıfırdan mı yapılacak?**

**Cevap:**

---sıfırdan yapacaz ama elimde kafamda fikirler var

---

## 3. RAUND — Arayüz (UI/UX) Soruları

> Önceki cevaplardan çıkan bilgiler: React Native · Android · Açık tema · Google ile giriş · Supabase · Offline destek · Push bildirim · Çoklu para birimi

---

### Ana Ekran (Home)

**U1. Ana ekranda önce ne görünmeli? Tüm giderlerin aylık toplamı mı (büyük rakam), yoksa gider listesi mi, yoksa ikisi birden mi?**

**Cevap:**

---Ana ekranda giderlerin tüm listesi olacak, üst kısımda da giderlerin kategorileri yer alacak. İstediğinde kategori olarak seçebilecek.

**U2. Giderler listede nasıl sıralanacak? (ekleme tarihine göre, ödeme tarihine göre, tutara göre, kategoriye göre)**

**Cevap:**

---Sıralama için farklı algoritmalar olsun kullanıcı değişebilsin. Tarihe göre ödeme boyutuna göre kategoriye göre

**U3. Her gider kartında hangi bilgiler gösterilecek? (logo, isim, tutar, ödeme tarihi, kategori etiketi, para birimi)**

**Cevap:**

---logo, isim, tutar, ödeme tarihi, kategori etiketi, para birimi

**U4. Alt navigasyon (tab bar) olacak mı? Olacaksa hangi sekmeler? (Örn: Ana Sayfa / Ekle / Raporlar / Ayarlar)**

**Cevap:**

---Alt bar değil üst bar olmalı ana sayfa ekle kategoriler raporlar ayarlar

### Gider Ekleme Ekranı

**U5. Sol üstte "Ekle" butonu dedik — bu bir + butonu mu, yoksa yazılı "Ekle" mi olacak? FAB (sağ alt yüzen buton) tercih edilir mi?**

**Cevap:**

--- + butonu sağ üstte yer almalı nav barın sağında

**U6. Platform seçme ekranında popüler platformların logoları mı görünsün (Netflix, Spotify, vb.), yoksa yalnızca liste mi olsun?**

**Cevap:**

--- liste görünsün herbirinin solunda da logoları olsun

**U7. Özel (custom) gider eklerken hangi alanlar zorunlu olsun? (isim, tutar, kategori, ödeme günü, para birimi, periyot — aylık/yıllık)**

**Cevap:**

---isim tutar ödeme günü para birimi kategori periyot

**U8. Gider eklendikten sonra ne olsun? Direkt ana ekrana mı dönsün, yoksa "Eklendi!" onay ekranı mı gösterilsin?**

**Cevap:**

---eklendi diye alt ksımda yeşilli tikli animasyonla çıksın sonra da ana sayfaya düşssün ve ana sayfaya atsın sonra

### Sayfalar ve Navigasyon

**U9. "Hepsini ayrı ayrı gösterecek şekilde sayfalar" dedin — bu sayfaları nasıl gezip aralarında nasıl geçiş yapılacak? (yatay kaydırma/swipe, alt sekmeler, yan menü)**

**Cevap:**
üst sekmeler
---

**U10. Kaç ayrı sayfa/ekran düşünüyorsun? (Örn: Genel Bakış, Kategoriler, Takvim, Raporlar)**

**Cevap:**

---ana sayfa kategoriler raporlar ayarlar

**U11. Takvim görünümü olacak mı? Ödeme tarihlerini takvimde görmek ister misin?**

**Cevap:**

---takvime gerek yok

### Renk ve Görsel Kimlik

**U12. Açık tema tamam — arka plan rengi için tercih nedir? (saf beyaz, kırık beyaz/gri, açık mavi tonu)**

**Cevap:**

---kırık beyaz olsun

**U13. Vurgu rengi (accent color) için tercih nedir? (mavi, yeşil, mor, turuncu — Bobby koyu lacivert kullanıyor)**

**Cevap:**

---MAvi yeşil turuncu sarı olsun

**U14. Uygulama için bir ikon/logo fikrin var mı? Varsa tarif et. (Yoksa Claude önerebilir)**

**Cevap:**

--- henüz yok öneri bekliyorum

### Bildirimler

**U15. Ödeme hatırlatma bildirimi kaç gün önce gelmeli? (1 gün önce, 3 gün önce, kullanıcı seçsin)**

**Cevap:**

--- 2 gün ve son gün

**U16. Bildirim metni nasıl olsun? (Örn: "Netflix ödemesi 2 gün sonra — ₺189")**

**Cevap:**

---... ödemeniz yaklaşıyor 2 gün kaldı

### Paylaşım ve PDF

**U17. Paylaşım özelliği nasıl çalışacak? Ekran görüntüsü paylaşımı mı, yoksa üretilmiş bir özet kart mı (Instagram story tarzı)?**

**Cevap:**

---Paylaşım olmasnnvazgeçtim güncelle bu bilgiyi

**U18. PDF'de ne görünmeli? (Tüm giderler listesi, aylık toplam, kategori dağılımı, logo)**

**Cevap:**

---Tüm giderler listesi, aylık toplam, kategori dağılımı, logo

### Onboarding ve Giriş

**U19. Uygulama ilk açılışta nasıl bir karşılama ekranı gösterecek? (Splash screen, onboarding slaytları, yoksa direkt Google giriş sayfası mı?)**

**Cevap:**

---giriş yap veya kayıt ol çıkacak sonra google ile kayıt ol çıkacak

**U20. Kullanıcı para birimini ilk kurulumda mı seçecek, yoksa ayarlardan mı değiştirebilecek?**

**Cevap:**

--- her yeni bir gider eklediğinde sçecek ekleye bastığında liste açılacak ve bu listedeki örneğin youtuba bastığında orda çıkacak para türü

---

## GEREKSİNİM ANALİZİ

> Tarih: 2026-05-17 · Tüm raund cevapları derlenerek oluşturulmuştur.

---

### 1. Proje Kimliği

| Alan | Değer |
|------|-------|
| **Proje adı** | fee-track |
| **Tür** | Bireysel mobil uygulama (Android) |
| **Platform** | React Native |
| **Backend** | Supabase (PostgreSQL) |
| **Geliştirici** | Osman Tat (tek kişi) |
| **Kaynak kod** | GitHub |
| **MVP süresi** | 2 gün |
| **Hedef** | Ayda 300 aktif kullanıcı |

---

### 2. Proje Amacı ve Kapsam

Kullanıcıların Netflix, Spotify, kira, fatura, sigorta gibi **tüm sabit ve tekrarlayan giderlerini** tek bir uygulamada takip etmelerine olanak tanıyan, **Bobby** uygulamasına benzer, genel kullanıma açık bir Android uygulaması.

**Temel problem:** Giderlerin farklı yerlerde (not defteri, Excel, hafıza) dağınık tutulması ve toplam aylık/yıllık maliyetin bilinememesi.

---

### 3. Fonksiyonel Gereksinimler

#### 3.1 Kimlik Doğrulama
- Kullanıcı **Google hesabı** ile giriş yapar
- İlk açılışta "Giriş Yap / Kayıt Ol" ekranı, ardından Google OAuth
- 2FA zorunlu değil (MVP dışı)

#### 3.2 Gider Yönetimi
- Kullanıcı **popüler platform listesinden** (Netflix, Spotify, YouTube vb.) gider ekleyebilir
  - Her platformun yanında logosu gösterilir
- Kullanıcı **özel (custom) gider** tanımlayabilir (kendi adını verir)
- **Gider ekleme formu zorunlu alanları:**
  - İsim
  - Tutar
  - Para birimi (TL / EUR / USD / Dinar)
  - Kategori
  - Periyot (Aylık / Yıllık)
  - Ödeme günü
- Gider eklendikten sonra yeşil tikli animasyon gösterilir, ardından ana sayfaya yönlendirilir
- Giderler düzenlenebilir ve silinebilir

#### 3.3 Kategori Sistemi
Desteklenen başlangıç kategorileri:
- Dijital Uygulamalar
- Fatura
- Ulaşım
- Eğlence
- (Gerekirse kullanıcı özel kategori ekleyebilir)

#### 3.4 Listeleme ve Filtreleme
- Ana ekranda tüm giderlerin listesi gösterilir
- Üst kısımda **kategori filtre sekmeleri** bulunur (Tümü / Dijital / Fatura / ...)
- Kullanıcı sıralama yapabilir:
  - Ödeme tarihine göre
  - Tutara göre
  - Kategoriye göre

#### 3.5 Her Gider Kartında Gösterilenler
- Platform logosu
- Gider ismi
- Tutar + para birimi
- Ödeme tarihi
- Kategori etiketi

#### 3.6 Bildirimler (Push Notification)
- Her gider için **2 gün önce** ve **son gün** hatırlatma bildirimi
- Bildirim metni: `"[Gider adı] ödemeniz yaklaşıyor, 2 gün kaldı"`

#### 3.7 PDF Dışa Aktarma
- Kullanıcı anlık gider özetini PDF olarak kaydedebilir
- PDF içeriği:
  - Uygulama logosu
  - Tüm giderler listesi
  - Aylık toplam
  - Kategori dağılımı

#### 3.8 Çevrimdışı (Offline) Destek
- Uygulama internet bağlantısı olmadan da çalışabilmeli
- Yerel cache ile giderler görüntülenebilir, değişiklikler bağlantı gelince senkronize olur

---

### 4. Fonksiyonel Olmayan Gereksinimler

| Gereksinim | Detay |
|-----------|-------|
| **Güvenlik** | KVKK/GDPR uyumu zorunlu |
| **Veri standardı** | PCI-DSS uyumlu finansal veri saklama |
| **Kimlik doğrulama** | Google OAuth (Supabase Auth) |
| **Veri depolama** | Supabase (bulut, PostgreSQL) |
| **Offline** | Yerel cache + senkronizasyon |
| **Test** | Unit test yazılacak |
| **Dil** | Türkçe (kod, yorum, dokümantasyon) |
| **Bütçe** | Başlangıçta sıfır bütçe — Supabase free tier |

---

### 5. Ekranlar ve Navigasyon

**Üst Tab Bar (5 sekme):**

```
[ Ana Sayfa ] [ Ekle ] [ Kategoriler ] [ Raporlar ] [ Ayarlar ]
```

| Ekran | İçerik |
|-------|--------|
| **Ana Sayfa** | Kategori filtre sekmeleri (üst) + gider listesi + sağ üstte + butonu |
| **Ekle** | Platform listesi (logolu) + Özel gider formu |
| **Kategoriler** | Kategoriye göre gruplandırılmış gider özeti |
| **Raporlar** | Aylık toplam, kategori dağılımı, PDF export butonu |
| **Ayarlar** | Kullanıcı profili, bildirim tercihleri, çıkış |

**+ Butonu:** Sağ üstte nav bar'ın yanında sabit durur, tıklanınca gider ekleme akışını açar.

---

### 6. Görsel Kimlik

| Alan | Değer |
|------|-------|
| **Tema** | Açık (Light) |
| **Arka plan** | Kırık beyaz |
| **Vurgu renkleri** | Mavi, Yeşil, Turuncu, Sarı (kategoriye göre farklı renk) |
| **Takvim görünümü** | Yok |
| **Logo** | Tasarlanacak (önerilecek) |

**Logo önerisi:** Fatura/gider izlenimi veren, soyut bir "F" harfi veya para simgesi + grafik çizgisi kombinasyonu; açık temaya uygun, düz (flat) tasarım.

---

### 7. Kapsam Dışı (MVP'de Olmayacaklar)

- Fatura / makbuz fotoğrafı yükleme
- Bütçe limiti ve aşım uyarısı
- Aile / ekip hesabı paylaşımı
- Takvim görünümü
- Sosyal paylaşım
- Banka/kart entegrasyonu
- iOS desteği (sonraki faz)
- 2FA
- CI/CD pipeline

---

### 8. Tech Stack Özeti

| Katman | Teknoloji |
|--------|-----------|
| **Mobil** | React Native (Android) |
| **Auth** | Supabase Auth (Google OAuth) |
| **Backend** | Supabase (PostgreSQL + Edge Functions) |
| **Offline cache** | AsyncStorage / MMKV |
| **Bildirimler** | Expo Notifications veya React Native Push Notification |
| **PDF** | react-native-html-to-pdf |
| **Kaynak kod** | GitHub |

---

### 9. Sonraki Fazlar (MVP Sonrası)

- iOS desteği
- Aile / ortak hesap özelliği
- Bütçe limiti ve uyarı sistemi
- Grafik & analitik dashboard
- Banka entegrasyonu
- Dark mode

---

*Bu dosya Claude Code tarafından proje analizi sürecinde oluşturulmuştur.*
