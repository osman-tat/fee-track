# fee-track — Gereksinim Analizi Belgesi

> **Sürüm:** 1.0  
> **Tarih:** 2026-05-17  
> **Geliştirici:** Osman Tat  

---

## İÇİNDEKİLER

1. [Yönetici Özeti](#1-yönetici-özeti)
2. [Proje Bağlamı](#2-proje-bağlamı)
3. [Paydaş ve Kullanıcı Analizi](#3-paydaş-ve-kullanıcı-analizi)
4. [Kullanıcı Hikayeleri](#4-kullanıcı-hikayeleri)
5. [Fonksiyonel Gereksinimler](#5-fonksiyonel-gereksinimler)
6. [Fonksiyonel Olmayan Gereksinimler](#6-fonksiyonel-olmayan-gereksinimler)
7. [Ekran Envanteri ve Akış Diyagramı](#7-ekran-envanteri-ve-akış-diyagramı)
8. [UI / UX Spesifikasyonu](#8-ui--ux-spesifikasyonu)
9. [Veri Modeli](#9-veri-modeli)
10. [Sistem Mimarisi](#10-sistem-mimarisi)
11. [Güvenlik Gereksinimleri](#11-güvenlik-gereksinimleri)
12. [Test Gereksinimleri](#12-test-gereksinimleri)
13. [Kapsam Dışı](#13-kapsam-dışı)
14. [Risk Analizi](#14-risk-analizi)
15. [Yayın ve Faz Planı](#15-yayın-ve-faz-planı)

---

## 1. Yönetici Özeti

**fee-track**, bireylerin Netflix, Spotify, kira, elektrik faturası, sigorta gibi sabit ve tekrarlayan tüm giderlerini tek bir Android mobil uygulamasında takip etmesini sağlayan genel kullanıma açık bir üründür.

**Temel problem:** Kullanıcılar sabit giderlerini farklı yerlerde (not defteri, Excel, hafıza) tutmakta; aylık ve yıllık toplam maliyetlerini net olarak görememektedir.

**Çözüm:** Popüler platform listesi ve özel gider ekleme özelliğiyle, tüm sabit giderlerin tek bir ekranda kategorize edilmiş, sıralanabilir ve raporlanabilir şekilde tutulduğu bir uygulama.

**Referans uygulama:** Bobby (iOS/Android abonelik takip uygulaması)

| Alan | Değer |
|------|-------|
| Platform | Android (React Native) |
| Veritabanı | SQLite (cihaz içi, yerel) |
| Auth | Yok — giriş gerektirmiyor (MVP) |
| Geliştirici | Osman Tat (solo) |
| MVP süresi | 2 gün |
| Kullanıcı hedefi | 300 aylık aktif kullanıcı |

---

## 2. Proje Bağlamı

### 2.1 Vizyon

Kullanıcıların her ay "bu ay ne kadar sabit giderim var?" sorusunu saniyeler içinde yanıtlayabildiği, basit ve kullanışlı bir Android uygulaması olmak.

### 2.2 Rekabet Analizi

| Özellik | fee-track | Bobby |
|---------|-----------|-------|
| Platform | Android | iOS + Android |
| Gider türü | Tüm sabit giderler | Ağırlıklı abonelik |
| Para birimi | TL / EUR / USD / Dinar | Çoklu |
| Offline destek | Var | Var |
| Fiyat | Ücretsiz (MVP) | Freemium |
| Arayüz dili | Türkçe | İngilizce |

### 2.3 Başarı Kriterleri

- İlk ayda 300 aktif kullanıcıya ulaşmak
- Kullanıcıların uygulamayı günlük/haftalık açması
- Gider ekleme akışının 30 saniyeden kısa sürmesi
- MVP'nin 2 günde teslim edilmesi

---

## 3. Paydaş ve Kullanıcı Analizi

### 3.1 Paydaşlar

| Paydaş | Rol | Beklenti |
|--------|-----|---------|
| Osman Tat | Geliştirici & Ürün Sahibi | MVP'yi hızlı teslim etmek, kullanıcı kazanmak |
| Son kullanıcılar | Bireysel Android kullanıcıları | Giderlerini kolayca takip etmek |

### 3.2 Birincil Kullanıcı Profili

- **Kitle:** Dijital veya fiziksel sabit giderleri olan bireyler
- **Yaş:** 18–45
- **Teknik yetkinlik:** Orta (sıradan akıllı telefon kullanıcısı)
- **Cihaz:** Android akıllı telefon
- **Beklenti:** "Aç, bak, anla" — karmaşık adım yok

### 3.3 MVP Kullanıcı Rolü

MVP'de tek bir rol vardır: **Standart Kullanıcı**

- Gider ekler, düzenler, siler
- Raporlarını görüntüler
- PDF indirir
- Bildirim alır

---

## 4. Kullanıcı Hikayeleri

### 4.1 Kimlik Doğrulama (Kaldırıldı)

MVP sürümünde tüm işlemler %100 yerel çalıştığı için kimlik doğrulama adımları (US-01, US-02, US-03) projeden çıkarılmıştır. Uygulama açılır açılmaz doğrudan Ana Sayfa'ya yönlendirilir.

### 4.2 Gider Ekleme

| # | Hikaye | Kabul Kriteri |
|---|--------|---------------|
| US-04 | Kullanıcı olarak sağ üstteki + butonuna tıklayarak gider ekleme ekranını açabilmeliyim | + butonuna basınca platform listesi açılır |
| US-05 | Kullanıcı olarak popüler platform listesinden (Netflix, Spotify vb.) seçim yapabilmeliyim | Liste logoları ile birlikte görünür, seçince form açılır |
| US-06 | Kullanıcı olarak listede olmayan özel bir gider tanımlayabilmeliyim | "Özel Ekle" seçeneği forma götürür |
| US-07 | Kullanıcı olarak gider eklerken para birimini seçebilmeliyim | TL / EUR / USD / Dinar seçenekleri sunulur |
| US-08 | Kullanıcı olarak giderin aylık mı yoksa yıllık mı olduğunu belirleyebilmeliyim | Periyot alanı zorunlu, Aylık / Yıllık seçeneği |
| US-09 | Kullanıcı olarak ödeme gününü (ayın kaçı) girebilmeliyim | Ödeme günü alanı zorunlu |
| US-10 | Kullanıcı olarak gider ekledikten sonra başarı animasyonu görmek istiyorum | Alt kısımda yeşil tikli animasyon çıkar, ardından ana sayfaya döner |

### 4.3 Listeleme ve Filtreleme

| # | Hikaye | Kabul Kriteri |
|---|--------|---------------|
| US-11 | Kullanıcı olarak ana ekranda tüm giderlerimi görmek istiyorum | Gider kartları liste halinde görünür |
| US-12 | Kullanıcı olarak kategoriye göre filtre uygulayabilmeliyim | Üstteki kategori sekmeleri aktif/pasif olur |
| US-13 | Kullanıcı olarak giderleri ödeme tarihine göre sıralayabilmeliyim | Sıralama menüsünden seçilir, liste yenilenir |
| US-14 | Kullanıcı olarak giderleri tutara göre sıralayabilmeliyim | Sıralama menüsünden seçilir |
| US-15 | Kullanıcı olarak giderleri kategoriye göre sıralayabilmeliyim | Sıralama menüsünden seçilir |

### 4.4 Bildirimler

| # | Hikaye | Kabul Kriteri |
|---|--------|---------------|
| US-16 | Kullanıcı olarak ödeme tarihimden 2 gün önce bildirim almak istiyorum | Sistem belirlenen gün sabahı bildirim gönderir |
| US-17 | Kullanıcı olarak ödeme günümde hatırlatma bildirimi almak istiyorum | Son gün sabahı ek bildirim gelir |
| US-18 | Kullanıcı olarak bildirimde hangi giderin yaklaştığını ve tutarını görmek istiyorum | "[Gider adı] ödemeniz yaklaşıyor, 2 gün kaldı" |

### 4.5 Raporlar ve PDF

| # | Hikaye | Kabul Kriteri |
|---|--------|---------------|
| US-19 | Kullanıcı olarak aylık toplam giderim ne kadar diye görmek istiyorum | Raporlar sayfasında büyük rakam gösterilir |
| US-20 | Kullanıcı olarak kategori bazlı gider dağılımımı görmek istiyorum | Kategorilere göre gruplandırılmış tutar listesi |
| US-21 | Kullanıcı olarak gider özetimi PDF olarak kaydedebilmeliyim | "PDF İndir" butonuna basınca cihaza kaydedilir |

### 4.6 Offline Kullanım

| # | Hikaye | Kabul Kriteri |
|---|--------|---------------|
| US-22 | Kullanıcı olarak internet olmadan da tüm işlemlerimi yapabilmeliyim | Veriler her zaman yerel veritabanından (SQLite) okunur ve yazılır |

---

## 5. Fonksiyonel Gereksinimler

### 5.1 Kimlik Doğrulama Modülü

Veriler kullanıcının kendi cihazında SQLite veritabanında tutulduğu için **MVP'de giriş/kayıt ekranı yoktur.** Uygulama açıldığında doğrudan Ana Sayfa'ya geçilir.

**FR-AUTH-01:** Uygulama ilk açılışta splash ekranı gösterir, ardından doğrudan Ana Sayfa'ya geçer.  
**FR-AUTH-02:** Kullanıcı verisi yalnızca cihazda saklanır; sunucuya hiçbir veri gönderilmez.  
**FR-AUTH-03:** Uygulama kaldırıldığında tüm veriler silinir (bu durum Ayarlar sayfasında kullanıcıya açıkça belirtilir).

> **Not:** Google ile giriş özelliği Faz 2'de bulut yedekleme istendiğinde eklenecektir.

---

### 5.2 Gider Yönetimi Modülü

**FR-EXP-01:** Sistem, önceden tanımlı popüler platform listesi içerir. Başlangıç için asgari 15 platform:

| Platform | Kategori | Logo |
|----------|----------|------|
| Netflix | Eğlence | netflix.png |
| Spotify | Eğlence | spotify.png |
| YouTube Premium | Eğlence | youtube.png |
| Apple Music | Eğlence | applemusic.png |
| Amazon Prime | Eğlence | amazon.png |
| Disney+ | Eğlence | disney.png |
| Exxen | Eğlence | exxen.png |
| Microsoft 365 | Dijital Uygulamalar | microsoft.png |
| Adobe CC | Dijital Uygulamalar | adobe.png |
| Dropbox | Dijital Uygulamalar | dropbox.png |
| iCloud | Dijital Uygulamalar | icloud.png |
| Turkcell Faturası | Fatura | turkcell.png |
| Vodafone Faturası | Fatura | vodafone.png |
| Elektrik | Fatura | elektrik.png |
| Doğalgaz | Fatura | dogalgaz.png |

**FR-EXP-02:** Kullanıcı, listede olmayan özel bir gider tanımlayabilir. Özel giderde platform logosu gösterilmez; kategori ikonu kullanılır.

**FR-EXP-03:** Gider ekleme formu zorunlu alanları:

| Alan | Tür | Kural |
|------|-----|-------|
| İsim | Metin | Max 50 karakter |
| Tutar | Sayı | Pozitif, max 999.999 |
| Para birimi | Seçim | TL / EUR / USD / Dinar |
| Kategori | Seçim | Mevcut kategorilerden biri |
| Periyot | Seçim | Aylık / Yıllık |
| Ödeme günü | Sayı | 1–31 arası gün |

**FR-EXP-04:** Gider başarıyla eklendiğinde:
1. Alt kısımda yeşil tikli toast animasyonu gösterilir (1.5 saniye)
2. Ardından kullanıcı otomatik olarak Ana Sayfa'ya yönlendirilir

**FR-EXP-05:** Kullanıcı mevcut bir gideri düzenleyebilir. Tüm alanlar değiştirilebilir.

**FR-EXP-06:** Kullanıcı bir gideri silebilir. Silme öncesi "Emin misin?" onay diyaloğu gösterilir.

---

### 5.3 Kategori Sistemi

**FR-CAT-01:** Sistem, aşağıdaki sabit kategorilerle başlar:

| Kategori | Vurgu Rengi | İkon |
|----------|-------------|------|
| Tümü | Gri | grid |
| Dijital Uygulamalar | Mavi | smartphone |
| Eğlence | Turuncu | play-circle |
| Fatura | Sarı | file-text |
| Ulaşım | Yeşil | car |
| Diğer | Gri | more-horizontal |

**FR-CAT-02:** Ana sayfanın üstünde yatay kaydırılabilir kategori sekmeleri bulunur. "Tümü" varsayılan olarak seçilidir.

**FR-CAT-03:** Kategori seçildiğinde liste anlık olarak filtrelenir.

---

### 5.4 Listeleme, Filtreleme ve Sıralama

**FR-LIST-01:** Ana ekranda aktif tüm giderler kart formatında listelenir.

**FR-LIST-02:** Her gider kartı şu bilgileri gösterir:
- Sol: Platform logosu (varsa) veya kategori ikonu
- Orta: Gider ismi (üstte), Ödeme tarihi (altta)
- Sağ: Tutar + para birimi (üstte, büyük), Kategori etiketi (altta, renkli chip)

**FR-LIST-03:** Sıralama seçenekleri (kullanıcı değiştirebilir):
- Ödeme tarihine göre (varsayılan — en yakın en üstte)
- Tutara göre (büyükten küçüğe / küçükten büyüğe)
- Kategoriye göre (alfabetik)

**FR-LIST-04:** Sıralama tercihi, oturum kapanana kadar hatırlanır.

---

### 5.5 Bildirim Modülü

**FR-NOT-01:** Her gider için iki ayrı push notification planlanır:
- **2 gün önce bildirimi:** Ödeme gününden 2 gün önce saat 09:00'da
- **Son gün bildirimi:** Ödeme günü saat 09:00'da

**FR-NOT-02:** Bildirim formatı:

```
Başlık : fee-track Hatırlatma
İçerik : [Gider Adı] ödemeniz yaklaşıyor, 2 gün kaldı
         Tutar: [Tutar] [Para Birimi]
```

**FR-NOT-03:** Gider silindiğinde ilgili bildirimler iptal edilir.

**FR-NOT-04:** Kullanıcı Ayarlar sayfasından bildirimleri tamamen kapatabilir.

**FR-NOT-05 (Tarih Mantığı):** Ödeme günü "31" olarak seçilen durumlar veya 30 çeken aylar (ve özellikle Şubat ayı) için özel bir İş Mantığı (Utility Function) eklenecektir. Eğer girilen ödeme günü mevcut ayın toplam gün sayısını aşıyorsa, tetikleyici olarak o ayın **son günü** (örn. 28 veya 29 Şubat) baz alınarak bildirim zamanlanır.

---

### 5.6 Raporlar Modülü

**FR-REP-01:** Raporlar sayfası şu bölümleri içerir:
1. **Aylık Toplam:** Offline yapı gereği çevrimiçi döviz kuru çevirisi yapılmaz; tüm para birimleri alt alta ayrı toplamlar halinde gösterilir (Örn: Toplam: 500 TL + 20 USD + 10 EUR).
2. **Yıllık Toplam:** Tüm giderlerin yıllık maliyet projeksiyonu (para birimlerine göre ayrı gruplandırılmış halde).
3. **Kategori Dağılımı:** Her kategorinin para birimi bazlı toplam tutarı.
4. **PDF İndir:** Özet raporu PDF olarak cihaza kaydeden buton

**FR-REP-02:** Raporlar sayfasında ay seçici bulunur (önceki aylara gidilebilir).

**FR-REP-03:** PDF içeriği:
- fee-track logosu + tarih başlığı
- Tüm giderlerin adı, tutarı, para birimi, periyodu
- Aylık toplam (para birimine göre ayrılmış)
- Kategori bazlı dağılım listesi

---

### 5.7 Yerel Depolama

Uygulama **tamamen çevrimdışı** çalışır. Veritabanı olarak cihaz içi SQLite kullanılır; hiçbir internet bağlantısı gerekmez.

**FR-OFF-01:** Tüm gider verileri cihazda `op-sqlite` (SQLite) ile saklanır.

**FR-OFF-02:** Uygulama internet bağlantısı olmadan tam işlevsel çalışır — ekleme, düzenleme, silme, raporlama.

**FR-OFF-03:** Uygulama başlarken herhangi bir senkronizasyon veya ağ isteği yapılmaz.

**FR-OFF-04:** Ayarlar sayfasında "Verileri Sıfırla" seçeneği bulunur; tüm SQLite kayıtlarını siler.

---

### 5.8 Ayarlar Modülü

**FR-SET-01:** Ayarlar sayfası şu seçenekleri içerir:
- Bildirimler açık/kapalı toggle
- Tüm Verileri Sıfırla (SQLite verilerini temizler)
- Uygulama hakkında (versiyon, lisans)

---

## 6. Fonksiyonel Olmayan Gereksinimler

### 6.1 Performans

| Gereksinim | Hedef |
|-----------|-------|
| Uygulama başlama süresi | < 2 saniye (cold start) |
| Gider listesi yükleme | < 1 saniye (SQLite'dan anlık okunur) |
| Gider ekleme formu açılma | < 300ms |
| PDF oluşturma süresi | < 3 saniye |

### 6.2 Kullanılabilirlik

- Uygulama tek elle kullanılabilir olmalı
- Gider ekleme işlemi 5 adımı geçmemeli
- Tüm işlem geri bildirimleri (yükleme, başarı, hata) görsel olarak gösterilmeli
- Minimum dokunma hedef boyutu 48x48 dp (Android Material Design standardı)

### 6.3 Güvenilirlik

- Uygulama çökmeden önce en az 8 saatlik kesintisiz kullanımı desteklemelidir
- Veri kaybı yaşandığında kullanıcı bilgilendirilmeli
- Uygulama %100 offline (yerel) çalıştığı için harici servis kesintilerinden etkilenmemelidir

### 6.4 Ölçeklenebilirlik

- Uygulama tamamen cihaz kaynaklarını (yerel veritabanı) kullandığı için kullanıcı sayısı veya sunucu maliyeti sınırı yoktur.
- SQLite veritabanı on binlerce gider kaydını bile performans sorunu olmadan işleyebilir.

### 6.5 Bakım ve Geliştirilebilirlik

- Kod Türkçe yorum ve dokümantasyonla yazılacak
- Komponent tabanlı mimari (tekrar kullanılabilir bileşenler)
- Unit test kapsamı kritik iş mantığını kapsayacak
- GitHub'da düzenli commit atılacak

---

## 7. Ekran Envanteri ve Akış Diyagramı

### 7.1 Ekran Listesi

| # | Ekran | Rota | Açıklama |
|---|-------|------|---------|
| S-01 | Splash | `/splash` | Logo + yükleme göstergesi |
| S-03 | Ana Sayfa | `/home` | Gider listesi + kategori filtreler |
| S-04 | Platform Seç | `/add/platform` | Logo'lu platform listesi |
| S-05 | Gider Formu | `/add/form` | Yeni gider ekleme formu |
| S-06 | Gider Detay | `/expense/:id` | Mevcut gider görüntüleme/düzenleme |
| S-07 | Kategoriler | `/categories` | Kategoriye göre gruplandırılmış özet |
| S-08 | Raporlar | `/reports` | Toplam, dağılım, PDF export |
| S-09 | Ayarlar | `/settings` | Bildirim ve veri sıfırlama ayarları |

### 7.2 Kullanıcı Akış Diyagramı

```
[Uygulama Açılır]
      |
      v
[Splash Ekranı — S-01]
      |
      v
[Ana Sayfa — S-03]
   |       |         |          |
   |       |         |          |
[+Ekle] [Kategoriler] [Raporlar] [Ayarlar]
   |         |            |          |
   v         v            v          v
[Platform   [S-07]     [S-08]     [S-09]
  Seç S-04]
   |
   |-- Platform Seç --> [Gider Formu S-05]
   |                           |
   |-- "Özel Ekle" ----------->|
                               |
                        [Form Doldur]
                               |
                        [Kaydet]
                               |
                    [Başarı Animasyonu]
                               |
                        [Ana Sayfa S-03]
```

---

## 8. UI / UX Spesifikasyonu

### 8.1 Tasarım Sistemi

| Özellik | Değer |
|---------|-------|
| Tema | Açık (Light only, MVP) |
| Arka plan | `#F5F5F0` (kırık beyaz) |
| Kart arka planı | `#FFFFFF` (beyaz) |
| Birincil metin | `#1A1A1A` |
| İkincil metin | `#6B6B6B` |
| Ayırıcı renk | `#E8E8E8` |
| Border radius | 12dp (kartlar), 8dp (butonlar), 20dp (chip'ler) |
| Font ailesi | System (Roboto — Android varsayılanı) |

### 8.2 Kategori Renk Paleti

| Kategori | Ana Renk | Arka Plan (chip) |
|----------|----------|-----------------|
| Dijital Uygulamalar | `#2196F3` (Mavi) | `#E3F2FD` |
| Eğlence | `#FF9800` (Turuncu) | `#FFF3E0` |
| Fatura | `#FFC107` (Sarı) | `#FFFDE7` |
| Ulaşım | `#4CAF50` (Yeşil) | `#E8F5E9` |
| Diğer | `#9E9E9E` (Gri) | `#F5F5F5` |

### 8.3 Navigasyon

Alt Tab Bar (Bottom Tab Bar) — 5 sekme:

```
┌────────────────────────────────────────────────────┐
│  fee-track                                         │  ← Header
├────────────────────────────────────────────────────┤
│                                                    │
│               (Ekran İçeriği)                      │
│                                                    │
├──────────┬──────────┬────────────┬────────┬────────┤
│ Ana Sayfa│   Ekle   │ Kategoriler│Raporlar│Ayarlar │  ← Alt Tab Bar
└──────────┴──────────┴────────────┴────────┴────────┘
```

- Aktif sekme vurgu rengi: `#2196F3` (mavi)
- Pasif sekme rengi: `#9E9E9E` (gri)

### 8.4 Ana Sayfa (S-03) Wireframe

```
┌─────────────────────────────────────┐
│  fee-track                    [+ ] │
├─────────────────────────────────────┤
│ [Tümü] [Dijital] [Eğlence] [Fatura]→│  ← Kategori filtreler (yatay scroll)
├─────────────────────────────────────┤
│ Sırala: Ödeme Tarihi ▼              │
├─────────────────────────────────────┤
│ ┌─────────────────────────────────┐ │
│ │ 🎬  Netflix          ₺189,90   │ │  ← Gider kartı
│ │     15 Haziran       [Eğlence] │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ 🎵  Spotify          ₺54,99    │ │
│ │     18 Haziran       [Eğlence] │ │
│ └─────────────────────────────────┘ │
│ ┌─────────────────────────────────┐ │
│ │ ⚡  Elektrik Faturası ₺420,00  │ │
│ │     25 Haziran       [Fatura]  │ │
│ └─────────────────────────────────┘ │
│              ...                    │
└─────────────────────────────────────┘
```

### 8.5 Platform Seçim Ekranı (S-04) Wireframe

```
┌─────────────────────────────────────┐
│ ← Geri         Gider Ekle           │
├─────────────────────────────────────┤
│ 🔍 Platform ara...                  │
├─────────────────────────────────────┤
│ EN ÇOK KULLANILANLAR                │
│ ┌────┐ Netflix                     │
│ │ 🎬 │ Eğlence                     │
│ └────┘                             │
│ ┌────┐ Spotify                     │
│ │ 🎵 │ Eğlence                     │
│ └────┘                             │
│ ┌────┐ YouTube Premium             │
│ │ ▶  │ Eğlence                     │
│ └────┘                             │
├─────────────────────────────────────┤
│ TÜM PLATFORMLAR                     │
│  ...                                │
├─────────────────────────────────────┤
│ [+ Özel Gider Ekle]                 │
└─────────────────────────────────────┘
```

### 8.6 Gider Formu (S-05) Wireframe

```
┌─────────────────────────────────────┐
│ ← Geri       Netflix Ekle           │
├─────────────────────────────────────┤
│                                     │
│ İsim *                              │
│ ┌─────────────────────────────────┐ │
│ │ Netflix                         │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Tutar *          Para Birimi *      │
│ ┌───────────┐    ┌────────────────┐ │
│ │ 189,90    │    │ TL           ▼ │ │
│ └───────────┘    └────────────────┘ │
│                                     │
│ Kategori *                          │
│ ┌─────────────────────────────────┐ │
│ │ Eğlence                       ▼ │ │
│ └─────────────────────────────────┘ │
│                                     │
│ Periyot *                           │
│ ( ) Aylık    ( ) Yıllık             │
│                                     │
│ Ödeme Günü *                        │
│ ┌─────────────────────────────────┐ │
│ │ 15                              │ │
│ └─────────────────────────────────┘ │
│                                     │
│ ┌─────────────────────────────────┐ │
│ │         KAYDET                  │ │
│ └─────────────────────────────────┘ │
└─────────────────────────────────────┘
        ✅ Gider eklendi!   ← Toast (başarı sonrası)
```

### 8.7 Logo Önerisi

**Konsept:** Harf "F" ve artış gösteren bir grafik çizgisi kombinasyonu  
**Stil:** Düz (flat), tek renk, minimal  
**Ana renk:** `#2196F3` (Mavi)  
**Arka plan:** Beyaz veya şeffaf  
**Format:** SVG + PNG (48dp, 72dp, 96dp, 192dp — Android launcher ikon boyutları)

---

## 9. Veri Modeli

> Veritabanı motoru: **SQLite** (cihaz içi, `@op-engineering/op-sqlite`)  
> Giriş sistemi olmadığı için `users` tablosu yoktur. Tek cihaz = tek kullanıcı.

### 9.1 Tablolar

#### `categories` — Kategoriler

Sistem başlangıcında sabit olarak seed edilir, kullanıcı değiştiremez.

```sql
CREATE TABLE IF NOT EXISTS categories (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  name      TEXT    NOT NULL,
  color     TEXT    NOT NULL,  -- hex kodu, örn: '#2196F3'
  icon      TEXT    NOT NULL   -- ikon ismi, örn: 'smartphone'
);
```

| id | name | color | icon |
|----|------|-------|------|
| 1 | Dijital Uygulamalar | #2196F3 | smartphone |
| 2 | Eğlence | #FF9800 | play-circle |
| 3 | Fatura | #FFC107 | file-text |
| 4 | Ulaşım | #4CAF50 | car |
| 5 | Diğer | #9E9E9E | more-horizontal |

---

#### `platforms` — Platformlar

Sistem başlangıcında seed edilir. Uygulama içinden güncellenemez (APK güncellemesiyle gelir).

```sql
CREATE TABLE IF NOT EXISTS platforms (
  id                  INTEGER PRIMARY KEY AUTOINCREMENT,
  name                TEXT    NOT NULL,
  logo_asset          TEXT,           -- assets/logos/netflix.png gibi
  default_category_id INTEGER REFERENCES categories(id)
);
```

---

#### `expenses` — Giderler

Kullanıcının oluşturduğu tüm giderler.

```sql
CREATE TABLE IF NOT EXISTS expenses (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  name         TEXT    NOT NULL CHECK(length(name) <= 50),
  amount       REAL    NOT NULL CHECK(amount > 0),
  currency     TEXT    NOT NULL CHECK(currency IN ('TRY','EUR','USD','DZD')),
  category_id  INTEGER NOT NULL REFERENCES categories(id),
  platform_id  INTEGER REFERENCES platforms(id),  -- NULL = özel gider
  period       TEXT    NOT NULL CHECK(period IN ('monthly','yearly')),
  payment_day  INTEGER NOT NULL CHECK(payment_day BETWEEN 1 AND 31),
  is_active    INTEGER NOT NULL DEFAULT 1,         -- SQLite boolean: 0/1
  created_at   TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at   TEXT    NOT NULL DEFAULT (datetime('now'))
);
```

---

#### `settings` — Uygulama Ayarları

Anahtar-değer tablosu; tek satırlık yapılandırma.

```sql
CREATE TABLE IF NOT EXISTS settings (
  key   TEXT PRIMARY KEY,
  value TEXT
);

-- Başlangıç değerleri:
-- notifications_enabled = '1'
-- default_sort = 'payment_day'
```

---

### 9.2 İndeksler

```sql
CREATE INDEX idx_expenses_payment_day  ON expenses(payment_day);
CREATE INDEX idx_expenses_category_id  ON expenses(category_id);
CREATE INDEX idx_expenses_is_active    ON expenses(is_active);
```

---

### 9.3 Seed Verisi (İlk Kurulum)

Uygulama ilk çalıştığında `categories` ve `platforms` tabloları otomatik doldurulur. Sonraki açılışlarda tekrar seed edilmez (idempotent kontrol yapılır).

```sql
-- Kontrol örneği:
INSERT OR IGNORE INTO categories (id, name, color, icon)
VALUES (1, 'Dijital Uygulamalar', '#2196F3', 'smartphone');
```

---

## 10. Sistem Mimarisi

### 10.1 Genel Mimari

Uygulama **tamamen cihaz içi** çalışır. Hiçbir harici sunucu veya internet bağlantısı gerektirmez.

```
┌──────────────────────────────────────────────┐
│                Android Cihaz                 │
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │          React Native App            │    │
│  │                                      │    │
│  │  ┌─────────────┐  ┌───────────────┐ │    │
│  │  │  UI Katmanı │  │ State Yönetimi│ │    │
│  │  │ (Ekranlar + │  │   (Zustand)   │ │    │
│  │  │  Bileşenler)│  │               │ │    │
│  │  └──────┬──────┘  └───────┬───────┘ │    │
│  │         │                 │         │    │
│  │  ┌──────▼─────────────────▼──────┐  │    │
│  │  │       Veri Erişim Katmanı     │  │    │
│  │  │     (Repository Pattern)      │  │    │
│  │  └──────────────┬────────────────┘  │    │
│  │                 │                   │    │
│  │  ┌──────────────▼────────────────┐  │    │
│  │  │    @op-engineering/op-sqlite  │  │    │
│  │  │         SQLite Motoru         │  │    │
│  │  └──────────────┬────────────────┘  │    │
│  │                 │                   │    │
│  │  ┌──────────────▼────────────────┐  │    │
│  │  │     feetrack.db (Dosya)       │  │    │
│  │  │   /data/data/com.feetrack/    │  │    │
│  │  └───────────────────────────────┘  │    │
│  │                                      │    │
│  │  ┌───────────────────────────────┐  │    │
│  │  │  @notifee — Local Bildirimler │  │    │
│  │  │  (İnternet gerektirmez)       │  │    │
│  │  └───────────────────────────────┘  │    │
│  └──────────────────────────────────────┘    │
│                                              │
│        İnternet bağlantısı gerekmiyor        │
└──────────────────────────────────────────────┘
```

### 10.2 Tech Stack Detayı

| Katman | Teknoloji | Versiyon | Amaç |
|--------|-----------|----------|------|
| Mobil framework | React Native | 0.74+ | Android uygulama |
| Navigation | React Navigation v6 | 6.x | Ekranlar arası geçiş |
| State yönetimi | Zustand | 4.x | Global uygulama durumu |
| **Veritabanı** | **@op-engineering/op-sqlite** | **3.x** | **Cihaz içi SQLite** |
| Bildirimler | @notifee/react-native | 7.x | Yerel push notification |
| PDF oluşturma | react-native-html-to-pdf | — | PDF export |
| İkon kütüphanesi | react-native-vector-icons | — | UI ikonları |
| Kaynak kod | GitHub | — | Versiyon kontrolü |

> **Kaldırılan bağımlılıklar:** `@supabase/supabase-js`, `AsyncStorage`, `MMKV` — bunların işlevini SQLite karşılıyor.

---

## 11. Güvenlik Gereksinimleri

### 11.1 Veri Güvenliği

Veriler kullanıcının kendi cihazında saklandığı için sunucu taraflı güvenlik katmanı bulunmaz. Güvenlik, Android'in kendi uygulama izolasyonuna dayanır.

- **SR-01:** SQLite dosyası (`feetrack.db`) Android'in uygulama özel alanında (`/data/data/com.feetrack/`) saklanır; başka uygulamalar erişemez
- **SR-02:** Uygulama kart numarası, şifre veya kimlik bilgisi saklamaz; yalnızca tutar ve gider adı
- **SR-03:** Hiçbir veri harici sunucuya gönderilmez (internet izni MVP'de talep edilmez)
- **SR-04:** Gelecekte bulut yedekleme eklenirse Android Keystore ile şifreli aktarım yapılır

### 11.2 KVKK / GDPR Uyumu

Veri cihazı terk etmediği için GDPR yükümlülükleri minimuma iner:

- **SR-05:** Kullanıcının kişisel verisi sunucularda işlenmediği için veri işleme sözleşmesi (DPA) gerekmez
- **SR-06:** Play Store listesinde "Veri toplanmıyor" (No data collected) beyanı yapılır
- **SR-07:** Ayarlar sayfasındaki "Tüm Verileri Sil" butonu SQLite dosyasını tamamen temizler (KVKK silme hakkı)
- **SR-08:** Uygulama ilk açılışta "Tüm verileriniz cihazınızda saklanır, sunucuya gönderilmez" bildirimini gösterir

---

## 12. Test Gereksinimleri

### 12.1 Test Stratejisi

| Test Türü | Araç | Kapsam |
|-----------|------|--------|
| Unit Test | Jest | İş mantığı fonksiyonları (tutar hesaplama, tarih işlemleri) |
| Component Test | React Native Testing Library | UI bileşenleri |
| Manuel Test | — | Gider ekleme akışı, offline mod, bildirim |

### 12.2 Kritik Test Senaryoları

| # | Senaryo | Beklenen Sonuç |
|---|---------|----------------|
| T-01 | Uygulama ilk açılış | Splash → Ana Sayfa (giriş ekranı yok) |
| T-02 | Geçerli gider ekleme | SQLite'a yazılır, başarı animasyonu, ana sayfaya dönüş |
| T-03 | Eksik alanla gider ekleme | İlgili alan kırmızıyla işaretlenir, kayıt yapılmaz |
| T-04 | Gider silme + onay | SQLite'dan silinir, liste güncellenir |
| T-05 | Kategori filtresi | Yalnızca seçili kategori gösterilir |
| T-06 | Sıralama değiştirme | Liste anlık olarak yeniden sıralanır |
| T-07 | Uçak modu (tam offline) | Uygulama kesintisiz çalışır |
| T-08 | PDF oluşturma | PDF cihaza kaydedilir, içerik doğru |
| T-09 | Bildirim izni reddi | Uygulama çalışmaya devam eder, bildirim gösterilmez |
| T-10 | 0 giderle rapor sayfası | "Henüz gider yok" boş durum gösterilir |
| T-11 | "Tüm Verileri Sil" | SQLite temizlenir, ana sayfa boş olur |
| T-12 | Uygulama kapatma/açma | SQLite verisi korunur, liste aynı kalır |

---

## 13. Kapsam Dışı

Aşağıdaki özellikler **MVP kapsamında değildir** ve sonraki fazlara bırakılmıştır:

| Özellik | Gerekçe |
|---------|---------|
| iOS desteği | MVP sadece Android; ilerleyen fazda eklenecek |
| Aile / ekip hesabı | Bireysel kullanım öncelikli |
| Bütçe limiti ve aşım uyarısı | MVP sonrası istek |
| Takvim görünümü | Kullanıcı ihtiyacı duyulmadı |
| Sosyal medya paylaşımı | Kullanıcı vazgeçti |
| Banka/kart entegrasyonu | Teknik karmaşıklık, sonraki faz |
| Fatura/makbuz fotoğrafı | MVP dışı |
| Dark mode | Sonraki faz |
| 2FA (İki faktörlü doğrulama) | MVP dışı |
| CI/CD pipeline | Solo geliştirici, erken aşama |
| Web uygulaması | Yalnızca mobil |

---

## 14. Risk Analizi

| # | Risk | Olasılık | Etki | Azaltma Yöntemi |
|---|------|----------|------|-----------------|
| R-01 | Uygulama silinince tüm veri kaybolur | Orta | Yüksek | Kullanıcıya açıkça belirtilir; Faz 2'de bulut yedekleme eklenir |
| R-02 | SQLite şema migrasyonu (güncelleme sonrası) | Orta | Yüksek | Sürüm numaralı migration sistemi baştan kurulur |
| R-03 | 2 günde MVP teslimi zaman baskısı | Yüksek | Yüksek | Kapsam küçüklüğüne sadık kal, bildirim/PDF Gün 2'ye bırak |
| R-04 | @op-sqlite kurulum sorunu (native bağımlılık) | Düşük | Orta | `expo-sqlite` alternatif olarak hazırda tutulur |
| R-05 | Android bildirim izni reddi | Orta | Düşük | Uygulama bildirim olmadan da tam işlevsel çalışır |
| R-06 | Play Store yayın süreci gecikmesi | Orta | Orta | İlk test için APK doğrudan dağıtılır |

---

## 15. Yayın ve Faz Planı

### 15.1 Faz 1 — MVP (2 Gün)

**Gün 1:**
- [ ] Proje kurulumu (React Native + Local SQLite)
- [ ] Veritabanı şeması (categories, platforms, expenses)
- [ ] Gider ekleme formu (platform listesi + özel gider)
- [ ] Ana sayfa gider listesi

**Gün 2:**
- [ ] Kategori filtreleme ve sıralama
- [ ] Push notification (ödeme hatırlatma)
- [ ] Raporlar sayfası + PDF export
- [ ] Ayarlar sayfası
- [ ] Manuel test + bug fix

### 15.2 Faz 2 — Büyüme (1–2 Hafta)

- iOS desteği (React Native zaten cross-platform)
- Daha fazla platform (30+)
- Grafik (pasta/çubuk grafik — kategori dağılımı)
- Uygulama turu / onboarding slaytları
- Dark mode
- Play Store yayını

### 15.3 Faz 3 — Gelişmiş Özellikler (1 Ay+)

- Aile hesabı (ortak gider görüntüleme)
- Bütçe limiti ve aşım bildirimi
- Banka ekstresi içe aktarma
- Çoklu dil desteği (İngilizce)
- App Store (iOS) yayını

---


