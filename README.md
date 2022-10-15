# BookingSystem
Tent booking system react/net

Opis i zakres projektu:
Aplikacja internetowa umożliwiająca zarezerwowanie namiotów w różnych rozmiarach dodatkowo możliwość wypożyczenia dodatkowego sprzętu imprezowego (głośnik, grill, stoły, ławki). Możliwość rejestracji i logowania. System kodów rabatowych. Opinie o firmie. Aplikacja będzie posiadała system wysyłający maila z potwierdzeniem rezerwacji. Użytkownik będzie miał możliwość sprawdzenia dostępności danego sprzętu w podanej przez siebie dacie. Aplikacja będzie posiadała możliwości zmiany języka(aplikacja dostępna po polsku / angielsku). Aplikacja będzie miała 2 tryby: przeglądanie w przeglądarce oraz PWA. Dane będą przechowywane w bazie danych. Frontend będzie komunikował się do bazy przez REST API.


Cele projektu:
- Umożliwienie rezerwacji namiotu na dany termin
- Umożliwienie wypożyczenie sprzętu imprezowego
- Umożliwienie wielu sposobów płatności 
- Umożliwienie klientowi rejestracji konta 
- Umożliwienie klientowi sprawdzenie dostępności sprzętu
- Umożliwienie zalogowanemu użytkownikowi wystawiania opinii
- Wysyłanie maila potwierdzającego rezerwacje 

Wymagania funkcjonalne:
- Możliwość zalogowania się
- Wybór terminu wynajmu
- Wgląd w dostępność sprzętu
- Dodawanie opinii
- Manualna zmiana języka przez użytkownika

Wymagania niefunkcjonalne:
- Aplikacja nie wymaga rejestracji do rezerwacji 
- Po rejestracji powinien się wysłać mail z potwierdzeniem
- Email o terminie wypożyczenia
- Komunikacja przy użyciu API
- Automatyczna zmiana języka w zależności od przeglądarki(PL/EN)
