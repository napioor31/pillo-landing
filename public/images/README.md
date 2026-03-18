# 📁 Folder Assets - Obrazy PillPal

## Struktura folderów

```
public/images/
├── screenshots/          # Zrzuty ekranu z aplikacji (AppShowcase)
│   ├── lista-lekow.png
│   ├── przypomnienia.png
│   ├── harmonogram.png
│   ├── bliscy.png
│   ├── raporty.png
│   └── bezpieczenstwo.png
├── hero/                 # Obraz telefonu w Hero Section
│   └── hero-phone.png
├── how-it-works/         # Kroki "Jak to działa"
│   ├── krok-1-dodaj-lek.png
│   ├── krok-2-ustaw-plan.png
│   └── krok-3-otrzymuj-przypomnienia.png
├── testimonials/         # Zdjęcia osób (opcjonalne)
├── badges/               # Przyciski App Store / Google Play
└── logo/                 # Logo aplikacji
```

## Wymagania dotyczące obrazów

### Hero Phone (`hero-phone.png`)
- **Format**: PNG (z przezroczystością) lub JPG
- **Wymiary**: ~400x800px (proporcje 1:2)
- **Zawartość**: Zrzut ekranu z aplikacji na tle ramki telefonu

### Screenshots (`screenshots/*.png`)
- **Format**: PNG lub JPG
- **Wymiary**: 1080x1920px (Full HD, proporcje 9:16)
- **Ilość**: 6 obrazów
- **Zawartość**: Poszczególne ekrany aplikacji

### How It Works (`how-it-works/*.png`)
- **Format**: PNG lub JPG
- **Wymiary**: ~600x400px (proporcje 3:2)
- **Ilość**: 3 obrazy (kroki 1-3)

## Jak podmienić obrazy

1. **Przygotuj zrzuty ekranu** z aplikacji (np. z symulatora lub urządzenia)
2. **Zapisz je** w odpowiednich folderach zgodnie z nazwami powyżej
3. **Odśwież stronę** - obrazy wczytają się automatycznie

## Ważne

- Jeśli obraz nie istnieje, komponent wyświetli CSS-owy mockup (fallback)
- Nie zmieniaj nazw plików - muszą być takie jak w instrukcji
- Używaj małych liter i myślników w nazwach plików
