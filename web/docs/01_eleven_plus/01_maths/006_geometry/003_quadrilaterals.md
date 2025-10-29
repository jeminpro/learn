# Quadrilaterals

### 📘 Explanation:

A **quadrilateral** is any **4-sided polygon**. The word comes from *quad* (four) and *latus* (side). You can think of them as **“four-cornered shapes”** — picture windows, kites, or road signs.

All quadrilaterals share these basic facts:

* **4 sides**, **4 angles**, and **2 diagonals** (lines joining opposite corners).
* The **sum of all interior angles = 360°**.
* They can be **regular** (all sides/angles equal) or **irregular**.

#### 🔹 Common Types of Quadrilaterals

| Type              | Properties                                                                      | Real-life example                  |
| ----------------- | ------------------------------------------------------------------------------- | ---------------------------------- |
| **Square**        | 4 equal sides, 4 right angles, opposite sides parallel                          | Floor tiles                        |
| **Rectangle**     | Opposite sides equal, 4 right angles                                            | Door, book                         |
| **Parallelogram** | Opposite sides equal & parallel, opposite angles equal, no right angles usually | Slanted book stand                 |
| **Rhombus**       | 4 equal sides, opposite angles equal, no right angles necessarily               | Diamond shape on cards             |
| **Trapezium**     | One pair of opposite sides parallel                                             | Bridge support, table leg crossbar |
| **Kite**          | Two pairs of equal adjacent sides, one line of symmetry                         | Flying kite                        |

#### 🔹 Key Formulas:

* **Perimeter** = sum of all sides.
* **Area (by type)**:

  * Square: side × side
  * Rectangle: length × width
  * Parallelogram: base × height
  * Rhombus: ½ × diagonal₁ × diagonal₂
  * Trapezium: ½ × (sum of parallel sides) × height

#### 🧭 Common Mistakes to Avoid:

* Mixing up parallelogram and trapezium (check if *both* pairs or *one* pair of sides are parallel).
* Confusing diagonals with sides.
* Using slanted side instead of perpendicular height for area.
* Forgetting to add *all four sides* for perimeter.

---

### 🧮 Examples:

1. **Finding a missing angle**

   * A quadrilateral has angles 90°, 85°, and 110°.
     Missing angle = 360 − (90 + 85 + 110) = **75°**.
   * Common mistake: subtracting from 180° instead of 360°.

2. **Area of a rectangle**

   * Length = 12 cm, width = 5 cm → Area = 12 × 5 = **60 cm²**.
   * Tip: Both pairs of sides are parallel and equal.

3. **Perimeter of a square**

   * Side = 7 cm → Perimeter = 4 × 7 = **28 cm**.

4. **Area of a parallelogram**

   * Base = 10 cm, height = 6 cm → Area = 10 × 6 = **60 cm²**.
   * Remember: use height, *not* slanted side.

5. **Area of a trapezium**

   * Parallel sides = 8 cm and 4 cm, height = 5 cm.
     Area = ½ × (8 + 4) × 5 = ½ × 12 × 5 = **30 cm²**.

---


## 🪞 **What Are Lines of Symmetry?**

A **line of symmetry** (also called a **mirror line**) is an **imaginary line** that divides a shape into **two identical halves** — like a mirror reflection.

👉 If you **fold the shape along that line**, both sides will **match exactly**.

---

## ✳️ **Lines of Symmetry in Common Quadrilaterals**

Let’s look at each type of quadrilateral.

| **Shape**                   | **Description**                          | **Number of Lines of Symmetry** | **Where the Lines Are**                                                        | **Quick Visual Tip 🧠**                             |
| --------------------------- | ---------------------------------------- | ------------------------------: | ------------------------------------------------------------------------------ | --------------------------------------------------- |
| **Square**                  | All sides and angles equal               |                           **4** | 2 along the diagonals + 2 through midpoints of opposite sides                  | Looks the same if you fold across middle or corners |
| **Rectangle**               | Opposite sides equal, all angles 90°     |                           **2** | Vertical and horizontal midlines                                               | Diagonals aren’t lines of symmetry                  |
| **Rhombus**                 | All sides equal, opposite angles equal   |                           **2** | Along the two diagonals                                                        | Only diagonals, not sides                           |
| **Parallelogram**           | Opposite sides parallel and equal        |                           **0** | None                                                                           | Slanted → folds don’t match                         |
| **Trapezium (Trapezoid)**   | Only one pair of sides parallel          |                   Usually **0** | Unless it’s **isosceles trapezium**, then **1** (vertical line through middle) | Check if non-parallel sides are equal               |
| **Kite**                    | Two pairs of equal-length adjacent sides |                           **1** | Along the line joining the unequal angles (diagonal)                           | Looks like a real kite folded in half               |
| **Irregular Quadrilateral** | No sides or angles equal                 |                           **0** | —                                                                              | No symmetry at all                                  |

---

### ✏️ **Quick Memory Trick**

> “More regular → more symmetry.”

| Shape                      | Regularity        | Lines of Symmetry |
| -------------------------- | ----------------- | ----------------- |
| Square                     | Most regular      | 4                 |
| Rectangle / Rhombus        | Semi-regular      | 2                 |
| Kite / Isosceles Trapezium | Partially regular | 1                 |
| Parallelogram / Irregular  | Not regular       | 0                 |


---

Below are **simple inline SVG diagrams** you can copy into any Markdown doc. Each shows the **shape outline** and its **line(s) of symmetry** as **dashed mint lines**.

---

### 1) Square — **4 lines of symmetry**


<svg width="220" height="180" viewBox="0 0 220 180">
  <rect x="60" y="30" width="100" height="100" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/>
  <!-- Vertical -->
  <line x1="110" y1="25" x2="110" y2="135" stroke="#2a7" stroke-width="3" stroke-dasharray="8 6"/>
  <!-- Horizontal -->
  <line x1="55" y1="80" x2="165" y2="80" stroke="#2a7" stroke-width="3" stroke-dasharray="8 6"/>
  <!-- Diagonals -->
  <line x1="60" y1="30" x2="160" y2="130" stroke="#2a7" stroke-width="3" stroke-dasharray="8 6"/>
  <line x1="160" y1="30" x2="60" y2="130" stroke="#2a7" stroke-width="3" stroke-dasharray="8 6"/>
</svg>


---

### 2) Rectangle — **2 lines of symmetry**

```html
<svg width="220" height="180" viewBox="0 0 220 180">
  <rect x="40" y="40" width="140" height="80" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/>
  <!-- Vertical -->
  <line x1="110" y1="35" x2="110" y2="125" stroke="#2a7" stroke-width="3" stroke-dasharray="8 6"/>
  <!-- Horizontal -->
  <line x1="35" y1="80" x2="185" y2="80" stroke="#2a7" stroke-width="3" stroke-dasharray="8 6"/>
</svg>
```

---

### 3) Rhombus — **2 lines of symmetry (diagonals)**

```html
<svg width="220" height="180" viewBox="0 0 220 180">
  <polygon points="110,20 180,80 110,140 40,80" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/>
  <!-- Diagonals -->
  <line x1="110" y1="20" x2="110" y2="140" stroke="#2a7" stroke-width="3" stroke-dasharray="8 6"/>
  <line x1="40" y1="80" x2="180" y2="80" stroke="#2a7" stroke-width="3" stroke-dasharray="8 6"/>
</svg>
```

---

### 4) Parallelogram — **0 lines of symmetry**

```html
<svg width="220" height="180" viewBox="0 0 220 180">
  <polygon points="60,40 180,40 140,120 20,120" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/>
  <!-- Note: No symmetry lines -->
</svg>
```

---

### 5) Trapezium (Isosceles) — **1 line of symmetry**

```html
<svg width="220" height="180" viewBox="0 0 220 180">
  <!-- Isosceles trapezium -->
  <polygon points="70,40 150,40 180,120 40,120" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/>
  <!-- Vertical symmetry -->
  <line x1="110" y1="30" x2="110" y2="130" stroke="#2a7" stroke-width="3" stroke-dasharray="8 6"/>
</svg>
```

---

### 6) Trapezium (General / non-isosceles) — **usually 0**

```html
<svg width="220" height="180" viewBox="0 0 220 180">
  <!-- Non-isosceles trapezium -->
  <polygon points="60,45 170,45 150,120 30,120" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/>
  <!-- No symmetry -->
</svg>
```

---

### 7) Kite — **1 line of symmetry**

```html
<svg width="220" height="180" viewBox="0 0 220 180">
  <polygon points="110,20 150,80 110,140 70,80" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/>
  <!-- Vertical symmetry -->
  <line x1="110" y1="15" x2="110" y2="145" stroke="#2a7" stroke-width="3" stroke-dasharray="8 6"/>
</svg>
```

---

### 8) Irregular Quadrilateral — **0 lines of symmetry**

```html
<svg width="220" height="180" viewBox="0 0 220 180">
  <polygon points="40,50 170,40 150,120 60,130" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/>
  <!-- No symmetry -->
</svg>
```

---



### 🧩 Word Problems:

#### 🔹 Easy

1. A rectangle has sides 8 cm and 5 cm. Find its perimeter.
2. A square has side 9 cm. Find its area.
3. The sum of the four angles of any quadrilateral equals what?
4. A kite has two pairs of equal sides. True or false?
5. A parallelogram has base 10 cm and height 7 cm. Find its area.
6. What shape has only one pair of parallel sides?
7. Find the missing angle if three angles of a quadrilateral are 100°, 80°, and 90°.
8. A square field has side 20 m. Find its perimeter.
9. A rectangle’s length is twice its width. If width = 6 cm, find its perimeter.
10. Which quadrilateral has four equal sides and four right angles?

#### 🔸 Medium

11. A rectangle has area 72 cm² and width 8 cm. Find its length.
12. A square’s perimeter is 36 cm. Find its side length and area.
13. The base of a parallelogram is 12 cm, and the height is 9 cm. Find its area.
14. A trapezium has parallel sides 9 cm and 5 cm, height 4 cm. Find its area.
15. A kite has diagonals 10 cm and 8 cm. Find its area.
16. A rectangle has length 15 cm and diagonal 17 cm. Find its width.
17. The ratio of length to width of a rectangle is 3:2. If its perimeter is 40 cm, find its sides.
18. A rhombus has diagonals 12 cm and 9 cm. Find its area.
19. A quadrilateral has three right angles of 90°, 90°, and 90°. Find the fourth angle.
20. A parallelogram has base 14 cm and height 8 cm. If base doubles but height halves, what happens to the area?

#### 🔺 Hard

21. A garden is in the shape of a trapezium with parallel sides 15 m and 25 m, height 10 m. Find its area.
22. A parallelogram’s area is 96 cm² and its base is 12 cm. Find its height.
23. The diagonals of a rhombus are 16 cm and 12 cm. Find its area and perimeter.
24. A rectangular floor is 9 m long and 6 m wide. How many 1 m² tiles are needed to cover it?
25. A parallelogram has base 18 cm and side 10 cm, with an included angle of 60°. Find its area (use ½ × base × side × sin(60°) reasoning).
26. A rectangle’s length is 8 cm more than its width. If its perimeter is 40 cm, find its area.
27. A square park has a diagonal of 14√2 m. Find its area.
28. A trapezium has area 84 cm². Its parallel sides are 12 cm and 9 cm. Find its height.
29. A rhombus has side 10 cm and one diagonal 16 cm. Find the other diagonal.
30. A quadrilateral has angles 70°, 90°, 85°, and x°. Find x and identify the shape if two sides are parallel.

---

### ✅ Answers:

1. 26 cm

2. 81 cm²

3. 360°

4. True

5. 70 cm²

6. Trapezium

7. 90° (360 − (100+80+90))

8. 80 m

9. 36 cm (2×(12+6))

10. Square

11. 9 cm (72 ÷ 8)

12. Side = 9 cm; area = 81 cm²

13. 108 cm²

14. 28 cm² (½×(9+5)×4)

15. 40 cm² (½×10×8)

16. Width = 8 cm (15² + w² = 17² → w²=64)

17. 3x+2x=20 → x=4 → sides 12 cm and 8 cm

18. 54 cm² (½×12×9)

19. 90° (must total 360°)

20. Same area (since base×height unchanged)

21. 200 m² (½×(15+25)×10)

22. 8 cm (96 ÷ 12)

23. Area = 96 cm² (½×16×12); side = 10 cm → perimeter = 40 cm

24. 54 tiles

25. 78 cm² (½×18×10×√3/2 ≈ 78)

26. Length = 14, width = 6 → area = 84 cm²

27. Side = 14 m → area = 196 m²

28. 8 cm (84 = ½×(12+9)×h → 84=10.5h → h=8)

29. Using right triangle halves: (8)² + (x/2)² = 10² → 64 + (x²/4)=100 → x²/4=36 → x=12 cm

30. x=115°; shape likely trapezium (one pair of parallel sides, unequal angles).

---

