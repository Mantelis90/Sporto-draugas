# Sporto draugas

„Sporto draugas“ — internetinė programėlė, padedanti vieno miesto
gyventojams susirasti partnerį sportui.

## Kokią problemą sprendžia programėlė?

Pradėti sportuoti ir išlaikyti reguliarumą gali būti sunku, kai
sportuoji vienas. Draugų laikas, gyvenamoji vieta ar norimos veiklos
ne visada sutampa.

Programėlė padės susirasti žmogų, su kuriuo būtų patogu sportuoti
ir palaikyti vienas kito motyvaciją. Partnerio bus galima ieškoti
pagal sporto šaką, miesto rajoną ir tinkamą laiką.

## Kas ją naudos?

Pirmoji versija skirta vieno miesto pilnamečiams gyventojams,
kurie pradeda sportuoti arba grįžta po pertraukos ir ieško kompanijos.

Pradinės veiklos:
- Sporto salė.
- Bėgimas.
- Ėjimas.
- Važiavimas dviračiu.

Pavyzdinis naudotojas: žmogus, norintis pradėti lankyti sporto salę
du kartus per savaitę vakarais, tačiau neturintis su kuo eiti.

## Kokios penkios funkcijos būtinos pirmajai versijai?

1. **Paskyra ir profilis.**
   Registracija, prisijungimas, vardas, trumpas prisistatymas
   ir privatus kontaktas susisiekimui.

2. **Sporto partnerio paieškos skelbimai.**
   Skelbimo kūrimas, redagavimas ir uždarymas. Skelbime nurodoma
   sporto šaka, rajonas, patirties lygis, tinkamas laikas,
   norimas dažnumas ir aprašymas.

3. **Skelbimų peržiūra ir filtravimas.**
   Galimybė peržiūrėti skelbimus ir filtruoti pagal sporto šaką,
   rajoną bei tinkamą laiką.

4. **Užklausos ir abipusis kontaktų atskleidimas.**
   Naudotojas atsiliepia į skelbimą trumpu prisistatymu.
   Autorius priima arba atmeta užklausą. Tik ją priėmus abu
   dalyviai mato vienas kito kontaktus ir gali susitarti dėl sporto.

5. **Pranešimai apie netinkamus skelbimus.**
   Naudotojai gali pranešti apie problemą, o administratorius —
   peržiūrėti pranešimą ir paslėpti skelbimą.

## Ko pirmoje versijoje nebus?

- Pokalbių programėlės viduje.
- Komandų komplektavimo ir grupinių renginių.
- Automatinio partnerių parinkimo algoritmo.
- Žemėlapio ir tikslios buvimo vietos sekimo.
- Mokėjimų, prenumeratų ir reklamos.
- Įvertinimų bei atsiliepimų apie žmones.
- Atskiros Android ar iOS programėlės.
- Kelių miestų palaikymo.

## Kokias technologijas naudosiu?

- **HTML ir CSS** — telefonui ir kompiuteriui pritaikytai sąsajai.
- **JavaScript** — sąsajos veiksmams ir bendravimui su API per fetch.
- **C# ir ASP.NET Core Web API (.NET 10)** — serverio logikai.
- **ASP.NET Core Identity** — paskyroms ir prisijungimui.
- **Entity Framework Core** — darbui su duomenų baze ir migracijoms.
- **MySQL** — duomenų saugojimui.
- **Docker Compose** — vietinei MySQL aplinkai.
- **Git ir GitHub** — versijų kontrolei ir užduočių valdymui.

## Kaip suprasiu, ar projektas pavyko?

Mokymosi tikslas — savarankiškai sukurti ir gebėti paaiškinti
visą kelią nuo veiksmo naršyklėje iki duomenų išsaugojimo bazėje.

Produkto vertę tikrinsiu su nedidele bandytojų grupe:
ar jie susirado partnerį, susitiko sportuoti ir norėtų tai pakartoti.

Vien registracijų ar skelbimų skaičius dar neparodo, kad programėlė
padeda žmonėms pradėti sportuoti.

## Projekto paleidimas

### Reikalavimai

- .NET 10 SDK
- Git

### Paleidimas

Atkurti projekto priklausomybes:

```bash
dotnet restore src/SportoDraugas.Api

dotnet build src/SportoDraugas.Api

dotnet run --project src/SportoDraugas.Api --launch-profile http