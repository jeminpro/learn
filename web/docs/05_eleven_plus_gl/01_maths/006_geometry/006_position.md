# Position

### 📘 Explanation:

**Position** in geometry tells us **where something is located** — often on a grid, map, or coordinate plane. It’s all about **describing location and movement** using numbers and directions.

We usually use a **coordinate grid** (also called a Cartesian plane) with two axes:

* **x-axis (horizontal)** – goes left ↔ right
* **y-axis (vertical)** – goes up ↑ and down ↓
* The point where they meet is called the **origin (0,0)**

**Coordinate Grid:**

<svg width="300" height="300" viewBox="0 0 300 300">
  {/* Grid lines */}
  <defs>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e0e0e0" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="300" height="300" fill="url(#grid)"/>
  
  {/* Axes */}
  <line x1="0" y1="150" x2="300" y2="150" stroke="#2a7" stroke-width="3"/>
  <line x1="150" y1="0" x2="150" y2="300" stroke="#2a7" stroke-width="3"/>
  
  {/* Arrows */}
  <polygon points="295,150 285,145 285,155" fill="#2a7"/>
  <polygon points="150,5 145,15 155,15" fill="#2a7"/>
  
  {/* Axis labels */}
  <text x="290" y="140" font-size="16" fill="#2a7" font-weight="bold">x</text>
  <text x="160" y="15" font-size="16" fill="#2a7" font-weight="bold">y</text>
  
  {/* Origin */}
  <circle cx="150" cy="150" r="4" fill="#ff6b6b"/>
  <text x="135" y="165" font-size="14" fill="#ff6b6b" font-weight="bold">(0,0)</text>
  <text x="130" y="180" font-size="12" fill="#555">origin</text>
  
  {/* Example points */}
  <circle cx="240" cy="90" r="4" fill="#4a9eff"/>
  <text x="245" y="90" font-size="13" fill="#4a9eff" font-weight="bold">A(3,2)</text>
  
  <circle cx="90" cy="30" r="4" fill="#9b59b6"/>
  <text x="50" y="25" font-size="13" fill="#9b59b6" font-weight="bold">B(-2,4)</text>
  
  <circle cx="150" cy="0" r="4" fill="#27ae60"/>
  <text x="160" y="35" font-size="13" fill="#27ae60" font-weight="bold">C(0,5)</text>
  
  {/* Direction labels */}
  <text x="260" y="170" font-size="12" fill="#555">positive x →</text>
  <text x="10" y="170" font-size="12" fill="#555">← negative x</text>
  <text x="160" y="30" font-size="12" fill="#555">↑ positive y</text>
  <text x="160" y="290" font-size="12" fill="#555">↓ negative y</text>
</svg>

A point's position is written as **(x, y)** → *(x first, then y)*
👉 Think **"along the corridor, then up the stairs."**

---

#### 🔹 Example of Coordinates

| Point | Coordinates | Explanation           |
| ----- | ----------- | --------------------- |
| A     | (3, 2)      | Move 3 right, 2 up    |
| B     | (–2, 4)     | Move 2 left, 4 up     |
| C     | (0, 5)      | On y-axis             |
| D     | (–3, 0)     | On x-axis (left side) |

The **x-coordinate** can be **positive (right)** or **negative (left)**.
The **y-coordinate** can be **positive (up)** or **negative (down)**.

---

#### 🔹 The Four Quadrants

When both x and y can be positive or negative, the plane divides into **4 quadrants**:

**Four Quadrants Diagram:**

<svg width="350" height="350" viewBox="0 0 350 350">
  {/* Grid lines */}
  <defs>
    <pattern id="grid2" width="25" height="25" patternUnits="userSpaceOnUse">
      <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#e0e0e0" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="350" height="350" fill="url(#grid2)"/>
  
  {/* Quadrant backgrounds */}
  <rect x="175" y="0" width="175" height="175" fill="#e8f5e9" opacity="0.3"/>
  <rect x="0" y="0" width="175" height="175" fill="#fff3e0" opacity="0.3"/>
  <rect x="0" y="175" width="175" height="175" fill="#f3e5f5" opacity="0.3"/>
  <rect x="175" y="175" width="175" height="175" fill="#e3f2fd" opacity="0.3"/>
  
  {/* Axes */}
  <line x1="0" y1="175" x2="350" y2="175" stroke="#2a7" stroke-width="3"/>
  <line x1="175" y1="0" x2="175" y2="350" stroke="#2a7" stroke-width="3"/>
  
  {/* Arrows */}
  <polygon points="345,175 335,170 335,180" fill="#2a7"/>
  <polygon points="175,5 170,15 180,15" fill="#2a7"/>
  
  {/* Origin */}
  <circle cx="175" cy="175" r="3" fill="#ff6b6b"/>
  <text x="180" y="195" font-size="12" fill="#ff6b6b" font-weight="bold">(0,0)</text>
  
  {/* Quadrant labels */}
  <text x="260" y="80" font-size="20" fill="#27ae60" font-weight="bold">I</text>
  <text x="260" y="100" font-size="13" fill="#555">(+, +)</text>
  <circle cx="250" cy="120" r="3" fill="#27ae60"/>
  <text x="255" y="125" font-size="11" fill="#27ae60" font-weight="bold">(3, 4)</text>
  
  <text x="80" y="80" font-size="20" fill="#f39c12" font-weight="bold">II</text>
  <text x="75" y="100" font-size="13" fill="#555">(-, +)</text>
  <circle cx="90" cy="120" r="3" fill="#f39c12"/>
  <text x="50" y="125" font-size="11" fill="#f39c12" font-weight="bold">(-2, 5)</text>
  
  <text x="80" y="260" font-size="20" fill="#9b59b6" font-weight="bold">III</text>
  <text x="75" y="280" font-size="13" fill="#555">(-, -)</text>
  <circle cx="90" cy="240" r="3" fill="#9b59b6"/>
  <text x="50" y="235" font-size="11" fill="#9b59b6" font-weight="bold">(-3, -4)</text>
  
  <text x="260" y="260" font-size="20" fill="#4a9eff" font-weight="bold">IV</text>
  <text x="255" y="280" font-size="13" fill="#555">(+, -)</text>
  <circle cx="250" cy="240" r="3" fill="#4a9eff"/>
  <text x="255" y="235" font-size="11" fill="#4a9eff" font-weight="bold">(4, -3)</text>
  
  {/* Axis labels */}
  <text x="340" y="165" font-size="14" fill="#2a7" font-weight="bold">x</text>
  <text x="185" y="15" font-size="14" fill="#2a7" font-weight="bold">y</text>
</svg>

| Quadrant | Sign of Coordinates | Example  |
| -------- | ------------------- | -------- |
| I        | (+, +)              | (3, 4)   |
| II       | (–, +)              | (–2, 5)  |
| III      | (–, –)              | (–3, –4) |
| IV       | (+, –)              | (4, –3)  |

---

#### 🔹 Distance & Midpoint (basic reasoning)

* **Horizontal or vertical distance** between two points:
  → Subtract x or y values (whichever changes).
  Example: (2, 5) and (7, 5) → distance = 7 – 2 = 5 units.

**Distance Example:**

<svg width="300" height="200" viewBox="0 0 300 200">
  {/* Grid */}
  <defs>
    <pattern id="grid3" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e0e0e0" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="300" height="200" fill="url(#grid3)"/>
  
  {/* Axes */}
  <line x1="0" y1="100" x2="300" y2="100" stroke="#2a7" stroke-width="2"/>
  <line x1="30" y1="0" x2="30" y2="200" stroke="#2a7" stroke-width="2"/>
  
  {/* Points */}
  <circle cx="90" cy="40" r="5" fill="#ff6b6b"/>
  <text x="95" y="35" font-size="14" fill="#ff6b6b" font-weight="bold">(2, 5)</text>
  
  <circle cx="240" cy="40" r="5" fill="#4a9eff"/>
  <text x="245" y="35" font-size="14" fill="#4a9eff" font-weight="bold">(7, 5)</text>
  
  {/* Distance line */}
  <line x1="90" y1="40" x2="240" y2="40" stroke="#9b59b6" stroke-width="3" stroke-dasharray="5 3"/>
  <text x="165" y="30" font-size="15" fill="#9b59b6" font-weight="bold">5 units</text>
  <text x="140" y="65" font-size="13" fill="#555">Distance = 7 - 2 = 5</text>
</svg>

* **Midpoint** between two points:
  → Average of x's and average of y's.
  Example: between (2, 4) and (6, 8) → midpoint = ((2+6)/2, (4+8)/2) = (4, 6).

**Midpoint Example:**

<svg width="300" height="250" viewBox="0 0 300 250">
  {/* Grid */}
  <rect width="300" height="250" fill="url(#grid3)"/>
  
  {/* Axes */}
  <line x1="0" y1="200" x2="300" y2="200" stroke="#2a7" stroke-width="2"/>
  <line x1="30" y1="0" x2="30" y2="250" stroke="#2a7" stroke-width="2"/>
  
  {/* Points */}
  <circle cx="90" cy="80" r="5" fill="#ff6b6b"/>
  <text x="50" y="75" font-size="14" fill="#ff6b6b" font-weight="bold">(2, 4)</text>
  
  <circle cx="210" cy="20" r="5" fill="#4a9eff"/>
  <text x="215" y="15" font-size="14" fill="#4a9eff" font-weight="bold">(6, 8)</text>
  
  {/* Line connecting points */}
  <line x1="90" y1="80" x2="210" y2="20" stroke="#e0e0e0" stroke-width="2" stroke-dasharray="3 2"/>
  
  {/* Midpoint */}
  <circle cx="150" cy="50" r="6" fill="#27ae60"/>
  <text x="155" y="45" font-size="14" fill="#27ae60" font-weight="bold">M(4, 6)</text>
  <text x="145" y="70" font-size="12" fill="#27ae60" font-weight="bold">Midpoint</text>
  
  {/* Formula */}
  <text x="60" y="230" font-size="13" fill="#555">Midpoint = ((2+6)/2, (4+8)/2) = (4, 6)</text>
</svg>

---

#### 🧭 Common Mistakes to Avoid:

* Writing coordinates backwards (always **x first, y second**).
* Confusing positive and negative directions.
* Counting squares diagonally instead of along axes.
* Forgetting to label the origin correctly.

---

### 🧮 Examples:

1. **Reading a coordinate**

   * Point P(4, 3): move 4 right and 3 up.

2. **Finding a missing coordinate**

   * Point A(2, 5), B(2, –1): same x, different y → vertical line.

3. **Midpoint example**

   * Between (1, 3) and (5, 3):
     Midpoint = ((1+5)/2, (3+3)/2) = (3, 3).

4. **Distance example**

   * Between (–2, 4) and (4, 4):
     Distance = 4 – (–2) = 6 units.

5. **Identifying quadrant**

   * Point (–3, –2) is in Quadrant III (both negative).

---

### 🧩 Word Problems:

#### 🔹 Easy

1. What are the coordinates of the origin?
2. Point A is (3, 2). What does this mean?
3. Point B(–4, 5): is it left or right of the origin?
4. Which axis does point (0, 6) lie on?
5. A point is 3 units left and 4 units down from the origin. Write its coordinates.
6. What is the x-coordinate of (–5, 2)?
7. What is the y-coordinate of (3, –7)?
8. Which quadrant is (2, 5) in?
9. Which quadrant is (–3, –1) in?
10. Between (1, 2) and (1, 6), what is the distance?

#### 🔸 Medium

11. Plot A(2, 3) and B(6, 3). Find the midpoint.
12. Find the distance between (–4, 2) and (2, 2).
13. Point P(4, –2) is reflected in the x-axis. What are the new coordinates?
14. Point Q(–3, 5) is reflected in the y-axis. Find the image coordinates.
15. A line joins (–1, 2) and (3, 2). How long is it?
16. Find the midpoint between (–2, –4) and (4, 0).
17. Which axis is point (5, 0) on?
18. Point (0, –8) is how far below the origin?
19. A rectangle has corners at (0, 0), (4, 0), (4, 3), and (0, 3). What is its area?
20. A point is reflected in both axes. If the original is (3, –5), what’s the new coordinate?

#### 🔺 Hard

21. A triangle has vertices at (0, 0), (6, 0), and (6, 8). Find its area.
22. Find the distance between (–5, –3) and (3, –3).
23. The midpoint between A(–6, 4) and B(2, –2).
24. Point (x, 3) lies halfway between (–5, 3) and (7, 3). Find x.
25. A point moves from (–2, –3) → (4, 2). How far does it move horizontally and vertically?
26. A rectangle has one vertex at (–3, –2) and an opposite at (3, 4). Find the centre (midpoint).
27. A shape has points (–2, –2), (–2, 2), (2, 2), and (2, –2). What shape is it?
28. The coordinates of a square are (0, 0), (4, 0), (4, 4), and (0, 4). Find its perimeter and area.
29. Reflect (–4, 7) in the x-axis, then in the y-axis.
30. The midpoint of (2, a) and (2, 8) is (2, 5). Find a.

---

### ✅ Answers:

1. (0, 0)

2. 3 right, 2 up

3. Left (x negative)

4. y-axis

5. (–3, –4)

6. –5

7. –7

8. Quadrant I

9. Quadrant III

10. 4 units

11. (4, 3)

12. 6 units (2 – (–4))

13. (4, 2) (y changes sign)

14. (3, 5) (x changes sign)

15. 4 units

16. ((–2+4)/2, (–4+0)/2) = (1, –2)

17. x-axis

18. 8 units

19. 4 × 3 = 12 square units

20. (–3, 5)

21. Right triangle: base 6, height 8 → area = ½×6×8 = 24

22. Distance = 8 units

23. ((–6+2)/2, (4+–2)/2) = (–2, 1)

24. (–5 + 7)/2 = 1 → so x = 1

25. 6 right, 5 up

26. ((–3+3)/2, (–2+4)/2) = (0, 1)

27. Square (equal sides, right angles)

28. Perimeter = 16 units; area = 16 square units

29. Reflect x-axis → (–4, –7), then y-axis → (4, –7)

30. (2, (a+8)/2) = (2, 5) → (a+8)/2 = 5 → a = 2

---

