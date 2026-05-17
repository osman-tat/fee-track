# Docker Kuralı İstisnası (Local Çalışma)

HAVSAN "Docker-First" anayasası gereği projeler normalde Docker içinde izole çalıştırılır. Ancak kullanıcı (Osman Tat) tarafından bu proje özelinde Docker yerine projenin **doğrudan local (Windows host) bilgisayarda çalıştırılmasına** karar verilmiştir. 

**Neden:** React Native ve mobil (APK) çıktısı süreçleri için host bilgisayar üzerinde çalışmanın daha verimli olacağı belirtilmiştir.
**Etki:** Node.js komutları, Expo Metro bundler ve `npx` işlemleri `docker-compose` kullanılmadan doğrudan PowerShell/Terminal üzerinden host makinede çalıştırılacaktır.
