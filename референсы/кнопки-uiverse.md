# Кнопки с Uiverse — стилевые образцы

Этот файл — коллекция готовых CSS-кнопок с [uiverse.io](https://uiverse.io), которые понравились по стилю. Используются как **референс стиля для агента** на уроке 3.06.

**Принцип использования (стратегия 2 из урока 3.04):** агент берёт стиль одной из этих кнопок и применяет ко всем кнопкам сайта, **адаптируя цвета под бренд ПРОФТРЕКЕРА**:
- Главный CTA — малиновый `#FF3770` или оранжевый `#FF9059`
- Вторичные кнопки — тёмный баклажан `#31263B`
- Фон страницы под кнопками — белый или бежевый

---

## Кнопка #1 — заливка из угла при наведении

**Автор:** yaasiinaxmed (Uiverse.io)
**Назначение:** хороша для **главного CTA** — выразительная анимация при наведении, привлекает внимание. Подойдёт для кнопок «Принять участие», «Зарегистрировать школу».
**Что важно:** контурная по умолчанию, заполняется цветом при наведении (растущий круг из правого нижнего угла → левый верхний).

```css
/* From Uiverse.io by yaasiinaxmed */
button {
  --color: #0077ff;
  font-family: inherit;
  display: inline-block;
  width: 6em;
  height: 2.6em;
  line-height: 2.5em;
  overflow: hidden;
  cursor: pointer;
  margin: 20px;
  font-size: 17px;
  z-index: 1;
  color: var(--color);
  border: 2px solid var(--color);
  border-radius: 6px;
  position: relative;
}

button::before {
  position: absolute;
  content: "";
  background: var(--color);
  width: 150px;
  height: 200px;
  z-index: -1;
  border-radius: 50%;
}

button:hover {
  color: white;
}

button:before {
  top: 100%;
  left: 100%;
  transition: 0.3s all;
}

button:hover::before {
  top: -30px;
  left: -30px;
}
```

**Адаптация под ПРОФТРЕКЕР:**
- Поменять `--color: #0077ff` на малиновый `#FF3770` для главного CTA
- Или на оранжевый `#FF9059` для вторичного

---

## Кнопка #2 — премиальная с неоновыми блобами

**Автор:** Spacious74 (Uiverse.io)
**Назначение:** **точечный главный CTA** на самых выразительных местах — hero-кнопка «Принять участие» / «Стать партнёром-наставником» / «Подать заявку». Эффект объёмный, премиальный, с подсветкой — притягивает взгляд.

**⚠️ Использовать ограниченно:** одна-две таких кнопки на всю страницу, иначе перегружает визуально. Все остальные кнопки — стиль #1 (контурная с заливкой).

**Особенность HTML — составная структура.** Это не просто `<button>текст</button>`, а:

```html
<button class="button">
  <div class="blob1"></div>
  <div class="inner">Принять участие</div>
</button>
```

```css
/* From Uiverse.io by Spacious74 */
.button {
  cursor: pointer;
  font-size: 1.4rem;
  border-radius: 16px;
  border: none;
  padding: 2px;
  background: radial-gradient(circle 80px at 80% -10%, #ffffff, #181b1b);
  position: relative;
}
.button::after {
  content: "";
  position: absolute;
  width: 65%;
  height: 60%;
  border-radius: 120px;
  top: 0;
  right: 0;
  box-shadow: 0 0 20px #ffffff38;
  z-index: -1;
}

.blob1 {
  position: absolute;
  width: 70px;
  height: 100%;
  border-radius: 16px;
  bottom: 0;
  left: 0;
  background: radial-gradient(
    circle 60px at 0% 100%,
    #3fe9ff,
    #0000ff80,
    transparent
  );
  box-shadow: -10px 10px 30px #0051ff2d;
}

.inner {
  padding: 14px 25px;
  border-radius: 14px;
  color: #fff;
  z-index: 3;
  position: relative;
  background: radial-gradient(circle 80px at 80% -50%, #777777, #0f1111);
}
.inner::before {
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 14px;
  background: radial-gradient(
    circle 60px at 0% 100%,
    #00e1ff1a,
    #0000ff11,
    transparent
  );
  position: absolute;
}
```

**Адаптация под ПРОФТРЕКЕР:**
- Цвет неонового блоба (`#3fe9ff` / `#0000ff80`) → заменить на **малиновый** `#FF3770` (или градиент малиновый → оранжевый `#FF9059`)
- Тёмная база (`#181b1b` / `#0f1111`) → можно заменить на **тёмный баклажан** `#31263B` (фирменный цвет ПРОФТРЕКЕРА)
- Тень `#0051ff2d` → на полупрозрачный малиновый `#FF377038`

---

## Кнопка #3 — круглая навигационная со стрелкой

**Автор:** karthik092726122003 (Uiverse.io)
**Назначение:** **навигационная кнопка-указатель** (не CTA!). Используется там, где нужна стрелка вперёд/назад/листать:
- Стрелки в **слайдере отзывов** ← →
- Кнопка **«листать к следующей секции»** на hero (стрелка вниз)
- Стрелки **«следующий участник»** / **«предыдущая профессия»** в карусели карт профессий
- Кнопки **«читать подробнее»** на карточках (стрелка-указатель)

**⚠️ Не использовать как CTA.** Эта кнопка слишком маленькая и узкоспециализированная для «Принять участие» или «Подать заявку» — для этого есть кнопки #1 и #2.

**Особенность HTML — составная структура с SVG-иконкой.** Это не просто кнопка, а оболочка `.styled-wrapper` → `<button>` → `.button-box` (с двумя SVG-стрелками для анимации смещения):

```html
<div class="styled-wrapper">
  <button class="button">
    <div class="button-box">
      <span class="button-elem">
        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.3.8-2.1Z" />
        </svg>
      </span>
      <span class="button-elem">
        <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.3.8-2.1Z" />
        </svg>
      </span>
    </div>
  </button>
</div>
```

```css
/* From Uiverse.io by karthik092726122003 */
.styled-wrapper .button {
  display: block;
  position: relative;
  width: 76px;
  height: 76px;
  margin: 0;
  overflow: hidden;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  border: 0;
}

.styled-wrapper .button:before {
  content: "";
  position: absolute;
  border-radius: 50%;
  inset: 7px;
  border: 3px solid black; /* Update dynamically for light/dark mode */
  transition:
    opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 80ms,
    transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 80ms;
}

.styled-wrapper .button:after {
  content: "";
  position: absolute;
  border-radius: 50%;
  inset: 7px;
  border: 4px solid #599a53;
  transform: scale(1.3);
  transition:
    opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
    transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  opacity: 0;
}

.styled-wrapper .button:hover:before,
.styled-wrapper .button:focus:before {
  opacity: 0;
  transform: scale(0.7);
  transition:
    opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1),
    transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.styled-wrapper .button:hover:after,
.styled-wrapper .button:focus:after {
  opacity: 1;
  transform: scale(1);
  transition:
    opacity 0.4s cubic-bezier(0.77, 0, 0.175, 1) 80ms,
    transform 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955) 80ms;
}

.styled-wrapper .button-box {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
}

.styled-wrapper .button-elem {
  display: block;
  width: 30px;
  height: 30px;
  margin: 24px 18px 0 22px;
  transform: rotate(360deg);
  fill: #f0eeef;
}

.styled-wrapper .button:hover .button-box,
.styled-wrapper .button:focus .button-box {
  transition: 0.4s;
  transform: translateX(-69px);
}
```

**Адаптация под ПРОФТРЕКЕР:**
- Контур по умолчанию (`border: 3px solid black`) → можно оставить **чёрный** для контраста или поменять на **тёмный баклажан** `#31263B`
- Цвет контура при наведении (`#599a53` зелёный) → заменить на **малиновый** `#FF3770` или **оранжевый** `#FF9059`
- Заливка иконки-стрелки (`fill: #f0eeef` бежевый) → можно оставить (близок к тёплой бежевой палитре ПРОФТРЕКЕРА) или поменять на `#FF3770`
- Для **стрелки «назад»** (в слайдере отзывов) — перевернуть SVG через `transform: rotate(180deg)` или `scaleX(-1)`

---

## Сводка: три уровня кнопок на лендинге

| Стиль | Где использовать | Сколько на странице |
|---|---|---|
| **#1** — контурная с заливкой | Основные CTA: «Принять участие», «Зарегистрировать школу», «Скачать программу» | Много — основной рабочий стиль |
| **#2** — премиальная с неоном | Главный hero-CTA + «Стать партнёром-наставником» | 1–2 на всю страницу (точечно) |
| **#3** — круглая со стрелкой | Стрелки в слайдере отзывов, «к следующей секции», «читать дальше» на карточках | По необходимости (везде, где нужна стрелка) |

---

## Как использовать (для агента на 3.06)

> На лендинге ПрофиКвиз используй стиль кнопок из файла `референсы/кнопки-uiverse.md`. Главный CTA («Принять участие») — кнопка #1 в малиновом `#FF3770`. Вторичные кнопки («Подробнее», «Скачать программу») — тот же стиль в оранжевом `#FF9059`. Кнопки отказных действий («Отмена», «Закрыть») — нейтральный серый, без выразительной анимации.
