# Triangles

### 📘 Explanation:

A **triangle** is a 2D shape with **3 sides** and **3 angles**. Triangles are everywhere — from road signs to roofs and bridges — and are the **strongest shape** in construction because their sides lock firmly together.

#### 🔹 Types by Sides:

| Type | Description | Visual | Example |
|------|-------------|--------|---------|
| **Equilateral triangle** | All sides and angles equal (each angle = 60°) | <svg width="120" height="110" viewBox="0 0 140 130"><polygon points="70,20 20,110 120,110" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/><text x="70" y="75" font-size="14" fill="#2a7" text-anchor="middle" font-weight="bold">60°</text><text x="30" y="105" font-size="14" fill="#2a7" text-anchor="middle" font-weight="bold">60°</text><text x="110" y="105" font-size="14" fill="#2a7" text-anchor="middle" font-weight="bold">60°</text></svg> | A slice of pizza cut into 3 equal parts |
| **Isosceles triangle** | 2 sides and 2 angles equal | <svg width="120" height="110" viewBox="0 0 140 130"><polygon points="70,20 30,110 110,110" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/><line x1="30" y1="110" x2="70" y2="20" stroke="#ff6b6b" stroke-width="2.5"/><line x1="110" y1="110" x2="70" y2="20" stroke="#ff6b6b" stroke-width="2.5"/><text x="40" y="105" font-size="14" fill="#2a7" text-anchor="middle" font-weight="bold">70°</text><text x="100" y="105" font-size="14" fill="#2a7" text-anchor="middle" font-weight="bold">70°</text></svg> | A kite's top half |
| **Scalene triangle** | All sides and angles different | <svg width="120" height="110" viewBox="0 0 140 130"><polygon points="40,20 20,110 120,110" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/><text x="30" y="60" font-size="12" fill="#555" text-anchor="middle">7cm</text><text x="70" y="120" font-size="12" fill="#555" text-anchor="middle">10cm</text><text x="90" y="60" font-size="12" fill="#555" text-anchor="middle">8cm</text></svg> | A random triangular sign |

#### 🔹 Types by Angles:

| Type | Description | Visual | Key Feature |
|------|-------------|--------|-------------|
| **Acute-angled** | All angles less than 90° | <svg width="120" height="110" viewBox="0 0 140 130"><polygon points="70,25 25,110 115,110" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/><text x="70" y="70" font-size="14" fill="#2a7" text-anchor="middle" font-weight="bold">70°</text><text x="35" y="105" font-size="14" fill="#2a7" text-anchor="middle" font-weight="bold">60°</text><text x="105" y="105" font-size="14" fill="#2a7" text-anchor="middle" font-weight="bold">50°</text></svg> | All angles sharp |
| **Right-angled** | One angle exactly 90° | <svg width="120" height="110" viewBox="0 0 140 130"><polygon points="30,30 30,110 110,110" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/><rect x="30" y="100" width="10" height="10" fill="none" stroke="#ff6b6b" stroke-width="2.5"/><text x="35" y="60" font-size="14" fill="#ff6b6b" text-anchor="middle" font-weight="bold">90°</text></svg> | Has a square corner |
| **Obtuse-angled** | One angle greater than 90° | <svg width="120" height="110" viewBox="0 0 140 130"><polygon points="30,40 30,110 120,110" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/><path d="M 30 50 Q 40 45 45 55" fill="none" stroke="#ff6b6b" stroke-width="2"/><text x="50" y="55" font-size="14" fill="#ff6b6b" text-anchor="start" font-weight="bold">120°</text></svg> | One angle very wide |

#### 🔹 Key Facts:

* The **sum of angles** in every triangle = **180°**.

**Angle Sum Property Visualized:**

<svg width="200" height="140" viewBox="0 0 200 140">
  {/* Triangle */}
  <polygon points="100,20 30,120 170,120" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/>
  {/* Angle labels */}
  <text x="100" y="50" font-size="16" fill="#2a7" text-anchor="middle" font-weight="bold">a</text>
  <text x="40" y="110" font-size="16" fill="#2a7" text-anchor="middle" font-weight="bold">b</text>
  <text x="160" y="110" font-size="16" fill="#2a7" text-anchor="middle" font-weight="bold">c</text>
  {/* Formula */}
  <text x="100" y="135" font-size="14" fill="#ff6b6b" text-anchor="middle" font-weight="bold">a + b + c = 180°</text>
</svg>

* **Longest side** is always opposite the **largest angle**.
* A triangle with one 90° angle is a **right triangle**; Pythagoras' theorem applies:
  *In a right triangle, (hypotenuse)² = (side1)² + (side2)².*
  (e.g., 3-4-5 triangle).

**Pythagoras' Theorem Visualized:**

<svg width="250" height="200" viewBox="0 0 250 200">
  {/* Right triangle */}
  <polygon points="40,150 40,50 180,150" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/>
  {/* Right angle marker */}
  <rect x="40" y="140" width="10" height="10" fill="none" stroke="#ff6b6b" stroke-width="2.5"/>
  {/* Labels */}
  <text x="20" y="100" font-size="16" fill="#2a7" font-weight="bold">a</text>
  <text x="110" y="170" font-size="16" fill="#2a7" font-weight="bold">b</text>
  <text x="110" y="90" font-size="16" fill="#ff6b6b" font-weight="bold">c (hypotenuse)</text>
  {/* Formula */}
  <text x="10" y="190" font-size="14" fill="#333" font-weight="bold">c² = a² + b²</text>
</svg>

* **Perimeter** = sum of all sides.
* **Area** = ½ × base × height.
  (Height is perpendicular from the base to the opposite vertex.)

**Area Formula Visualized:**

<svg width="220" height="160" viewBox="0 0 220 160">
  {/* Triangle */}
  <polygon points="40,130 40,40 180,130" fill="#eaf7ff" stroke="#2a7" stroke-width="3"/>
  {/* Height line */}
  <line x1="40" y1="40" x2="40" y2="130" stroke="#ff6b6b" stroke-width="2.5" stroke-dasharray="5 3"/>
  {/* Base line */}
  <line x1="40" y1="130" x2="180" y2="130" stroke="#4a9eff" stroke-width="2.5"/>
  {/* Labels */}
  <text x="20" y="85" font-size="14" fill="#ff6b6b" font-weight="bold">height</text>
  <text x="100" y="145" font-size="14" fill="#4a9eff" font-weight="bold">base</text>
  {/* Formula */}
  <text x="50" y="20" font-size="14" fill="#333" font-weight="bold">Area = ½ × base × height</text>
</svg>

#### 🧭 Common Mistakes to Avoid:

* Forgetting to use 180° when finding missing angles.
* Confusing height with slant side (height must be perpendicular).
* Mixing side types and angle types.
* Using wrong base/height pair for area.

---

### 🧮 Examples:

1. **Finding a missing angle**

   * A triangle has angles 70° and 50°.
     Missing angle = 180 − (70 + 50) = **60°**.
   * Common mistake: forgetting to subtract from 180°.

2. **Identifying the triangle**

   * A triangle with sides 5 cm, 5 cm, and 8 cm is **isosceles** (two sides equal).
   * Common mistake: saying “scalene” without checking for equal sides.

3. **Area from base and height**

   * Base = 10 cm, height = 6 cm.
     Area = ½ × 10 × 6 = **30 cm²**.
   * Common mistake: multiplying directly (10×6) without halving.

4. **Perimeter problem**

   * Triangle sides are 7 cm, 9 cm, and 10 cm.
     Perimeter = 7 + 9 + 10 = **26 cm**.

5. **Right-angled triangle reasoning**

   * A triangle has sides 5, 12, and 13.
     Check: 5² + 12² = 25 + 144 = 169 = 13² → **right-angled triangle**.

---

### 🧩 Word Problems:

#### 🔹 Easy

1. A triangle has angles 40° and 60°. Find the third angle.
2. Sides are 4 cm, 4 cm, 4 cm. What type of triangle is it?
3. Base = 10 cm, height = 4 cm. Find its area.
4. A triangle has one angle of 90°. What type of triangle is it?
5. Two sides of a triangle are equal. What type of triangle could it be?
6. Find the perimeter of a triangle with sides 6 cm, 6 cm, 6 cm.
7. A triangle’s base is 8 cm and height is 3 cm. Find its area.
8. A triangle has sides 4 cm, 5 cm, and 6 cm. What type of triangle is it by sides?
9. A triangle has angles 80°, 50°, and 50°. What type of triangle is it by angles?
10. Which triangle has all angles less than 90°?

#### 🔸 Medium

11. A triangle has two angles of 35° and 65°. Find the third angle and state its type.
12. A triangle’s base is 12 cm and its height is half the base. Find its area.
13. A triangle has perimeter 27 cm. Two sides are 9 cm and 8 cm. Find the third side.
14. A triangle has sides 9 cm, 9 cm, and 14 cm. What type of triangle is it by sides and angles?
15. A triangle has sides 6 cm, 8 cm, and 10 cm. Check if it is right-angled.
16. The base of a triangle is 15 cm. Its height is ⅔ of the base. Find the area.
17. A triangle has angles 30°, 60°, and 90°. What kind of triangle is it?
18. An isosceles triangle has base 10 cm and equal sides 13 cm. Find its perimeter.
19. A triangle has a base of 8 cm and an area of 24 cm². Find its height.
20. A triangle has sides 5 cm, 7 cm, and 10 cm. Which angle is the largest?

#### 🔺 Hard

21. A triangle has sides 13 cm, 14 cm, and 15 cm. Find its perimeter and type.
22. A triangle’s angles are in the ratio 2:3:4. Find each angle.
23. A right triangle has a base of 9 cm and height of 12 cm. Find the hypotenuse and area.
24. A triangle’s base is 10 cm longer than its height. If its area is 60 cm², find base and height.
25. A triangle’s perimeter is 60 cm. Its sides are in the ratio 3:4:5. Find each side.
26. A triangle has sides 7 cm, 8 cm, and 9 cm. Find the largest angle using reasoning.
27. A triangle’s two angles are equal, and the third angle is 50°. Find the equal angles.
28. A triangle’s area is 45 cm² and its base is 9 cm. Find the height.
29. A triangle with sides 9 cm, 12 cm, and 15 cm is enlarged by a scale factor of 2. Find new area.
30. A right-angled triangle has hypotenuse 25 cm and one side 24 cm. Find the other side.

---

### ✅ Answers:

1. 80°

2. Equilateral

3. 20 cm²

4. Right-angled triangle

5. Isosceles

6. 18 cm

7. 12 cm²

8. Scalene

9. Isosceles acute-angled

10. Acute-angled triangle

11. 80°, acute-angled

12. Height = 6 cm; area = ½×12×6 = 36 cm²

13. 10 cm

14. Isosceles, obtuse-angled (because 14² > 9²+9²)

15. Yes, right-angled (6²+8²=10²)

16. Height = 10 cm; area = ½×15×10 = 75 cm²

17. Right-angled (30-60-90 triangle)

18. Perimeter = 10 + 13 + 13 = 36 cm

19. 6 cm (½×8×h=24 ⇒ h=6)

20. The largest angle is opposite the longest side (10 cm side).

21. Perimeter = 42 cm; scalene, acute-angled

22. 2+3+4 = 9 parts → 180 ÷ 9 = 20°; angles 40°, 60°, 80°

23. Hypotenuse = 15 cm (3-4-5 scale); area = 54 cm²

24. Let height = h, base = h+10 → ½×h×(h+10)=60 → h²+10h=120 → h²+10h−120=0 → h=10 (ignore negative) → base=20

25. Total ratio = 12 parts → 60 ÷ 12 = 5 → sides 15 cm, 20 cm, 25 cm

26. Opposite 9 cm side is smallest angle; opposite 7 cm side is smallest angle; largest opposite 9 cm. Use logic (largest side ⇒ largest angle ≈ 100°)

27. 65° each (since 65 + 65 + 50 = 180)

28. h = (2×45)/9 = 10 cm

29. Scale factor 2 → area × 4 ⇒ 4×(½×9×12=54) = 216 cm²

30. 7 cm (25²−24²=49 → √49 = 7 cm)

---

