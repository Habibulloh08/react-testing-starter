// 1 Funksiya nomi: testShouldRenderNoUsersWhenUsersArrayIsEmpty
// Vazifa: Testlash uchun, agar UserList komponenti users propi bo'sh ro'yxat (array) bo'lsa, "No users available" xabarni DOMga chiqarishini tekshirish.

// 2 Funksiya nomi: testShouldRenderUsersWithTheirNamesAsLinks
// Vazifa: Testlash uchun, agar UserList komponentida foydalanuvchilar ro'yxati bo'sh bo'lmasa, har bir foydalanuvchi nomini URLga bog'liq link sifatida chiqarishini tekshirish.

// 3 Funksiya nomi: testShouldRenderUsersWithCorrectLinks
// Vazifa: Testlash uchun, agar UserList komponentida foydalanuvchilar ro'yxati to'g'ri bo'lsa, har bir foydalanuvchi nomi uchun to'g'ri URL manzillarni chiqarishini tekshirish.
// 4 Funksiya nomi: testShouldNotRenderUsersWhenUsersArrayIsUndefined
// Vazifa: Testlash uchun, agar UserList komponentiga users propi berilmagan bo'lsa, hech qanday foydalanuvchini chiqarmaslikni tekshirish.

// 5 Funksiya nomi: testShouldNotRenderUsersWhenUsersArrayIsNull
// Vazifa: Testlash uchun, agar UserList komponentiga null qiymat berilsa, hech qanday foydalanuvchini chiqarmaslikni tekshirish.

// 6 Funksiya nomi: testShouldRenderUsersWithUniqueKeys
// Vazifa: Testlash uchun, agar UserList komponentida foydalanuvchilar ro'yxati to'g'ri bo'lsa, har bir foydalanuvchi uchun to'g'ri unikal kalitlarni (key attributini) o'rnatishni tekshirish.

// 7 Funksiya nomi: testShouldRenderUsersWithCustomLinkFormat
// Vazifa: Testlash uchun, agar UserList komponentida foydalanuvchilar ro'yxati to'g'ri bo'lsa, har bir foydalanuvchi uchun foydalanuvchi nomi va ID si bo'yicha shaxsiy URL formatini (/users/:id) ishlatishni tekshirish.

// 8 Funksiya nomi: testShouldRenderUsersWithCorrectLinkFormat
// Vazifa: Testlash uchun, agar UserList komponentida foydalanuvchilar ro'yxati to'g'ri bo'lsa, har bir foydalanuvchi uchun foydalanuvchi nomi va ID si bo'yicha shaxsiy URL formatini (/users/:id) ishlatishni va URL manzillarni tekshirish.

// 9 Funksiya nomi: testShouldRenderUsersWithCustomAvatar
// Vazifa: Testlash uchun, agar UserList komponentida foydalanuvchilar ro'yxati to'g'ri bo'lsa, har bir foydalanuvchi uchun o'ziga xos avatarni (<img> tegi orqali) chiqarishini tekshirish.

// 10 Funksiya nomi: testShouldRenderUsersWithCorrectAttributes
// Vazifa: Testlash uchun, agar UserList komponentida foydalanuvchilar ro'yxati to'g'ri bo'lsa, har bir foydalanuvchi uchun to'g'ri atributlarni (id, name, avatar, email, role kabi) chiqarishini tekshirish.

// 11 Funksiya nomi: testShouldRenderUsersInOrder
// Vazifa: Testlash uchun, agar UserList komponentida foydalanuvchilar ro'yxati to'g'ri bo'lsa, ro'yxatda berilgan tartibda foydalanuvchilarni chiqarishini tekshirish.

// 12 Funksiya nomi: testShouldHandleUserListLoadingState
// Vazifa: Testlash uchun, agar UserList komponenti yuklanish holatida bo'lsa, yuklanish jarayonini tekshirish.

// 13 Funksiya nomi: testShouldHandleUserListErrorState
// Vazifa: Testlash uchun, agar UserList komponentida xatolik bo'lsa, xato holatni tekshirish.

// 14 Funksiya nomi: tgetByRole
// Vazifa: getByRole funksiyasi, HTML-elementlarni roli bo'yicha topadi. Misol uchun, getByRole('button') yordamida button elementini topish mumkin. getByRole funksiyasidan foydalanib, TermsAndConditions komponentini render qilib, uning ichida 'Terms & Conditions' degan matn borligini va u matnning to'g'ri kelishini tekshiramiz.

// 15 Funksiya nomi: toBeInTheDocument
// Vazifa: toBeInTheDocument matcheri, elementning DOMda mavjud bo'lishini tekshiradi. getByRole funksiyasidan foydalanib, TermsAndConditions komponentini render qilib, uning ichida 'Terms & Conditions' degan matn borligini tekshiramiz.

// 16 Funksiya nomi: toHaveTextContent
// Vazifa: toHaveTextContent matcheri, elementning matnini tekshiradi. getByRole funksiyasidan foydalanib, TermsAndConditions komponentini render qilib, uning ichida 'Terms & Conditions' degan matn borligini va u matnning to'g'ri kelishini tekshiramiz.

// 17 Funksiya nomi: toHaveAttribute
// Vazifa: toHaveAttribute matcheri, elementning attributlarini tekshiradi. getByRole funksiyasidan foydalanib, TermsAndConditions komponentini render qilib, uning ichida checkbox etoBeEnabledlementining checked attributini tekshiramiz.

// 18 Funksiya nomi: toHaveClass
// Vazifa: toHaveClass matcheri, elementning klasslarini tekshiradi. getByRole funksiyasidan foydalanib, TermsAndConditions komponentini render qilib, uning ichida button elementining btn klassini tekshiramiz.

// 19 Funksiya nomi: toBeDisabled
// Vazifa: toBeDisabled matcheri, elementning faol emasligini tekshiradi. getByRole funksiyasidan foydalanib, TermsAndConditions komponentini render qilib, uning ichida button elementining faol emasligini tekshiramiz.

// 20 Funksiya nomi: toHaveValue
// Vazifa: toHaveValue matcheri, elementning qiymatini tekshiradi. getByRole funksiyasidan foydalanib, TermsAndConditions komponentini render qilib, uning ichida input elementining qiymatini tekshiramiz.

// 21 Funksiya nomi: toHaveFocus
// Vazifa: toHaveFocus matcheri, elementning fokuslanishini tekshiradi. getByRole funksiyasidan foydalanib, TermsAndConditions komponentini render qilib, uning ichida input elementiga fokuslanishini tekshiramiz.

// 22 Funksiya nomi: toHaveFormValues
// Vazifa: toHaveFormValues matcheri, form elementining qiymatlarini tekshiradi. getByRole funksiyasidan foydalanib, TermsAndConditions komponentini render qilib, uning ichida form elementining qiymatlarini tekshiramiz.

// 23 Funksiya nomi: getByPlaceholderText
// Vazifa: getByPlaceholderText funksiyasi, input element (masalan, search inputi) uchun placeholder matnini topadi. getByPlaceholderText funksiyasidan foydalanib, TermsAndConditions komponentini render qilib, uning ichida input elementining placeholder matnini tekshiramiz.

// 24 Funksiya nomi: toBeChecked
// Vazifa: toBeChecked matcheri, checkbox elementining belgilangan bo'lishini tekshiradi. getByRole funksiyasidan foydalanib, TermsAndConditions komponentini render qilib, uning ichida checkbox elementining belgilangan bo'lishini tekshiramiz.

// 25 Funksiya nomi: toBeEnabled
// Vazifa: toBeEnabled matcheri, elementning faol bo'lishini tekshiradi. getByRole funksiyasidan foydalanib, TermsAndConditions komponentini render qilib, uning ichida button elementining faol bo'lishini tekshiramiz.