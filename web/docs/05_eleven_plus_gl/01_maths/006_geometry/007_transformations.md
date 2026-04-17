# Transformations

### 📘 Explanation:

**Transformations** are ways of **moving or changing shapes** on a coordinate grid **without altering their size or proportions** (unless it’s a scale enlargement).
They help us understand **symmetry, rotation, movement, and reflection** — the geometry of change!

The main types are:

| Transformation            | What It Does                       | Key Facts                                 |
| ------------------------- | ---------------------------------- | ----------------------------------------- |
| **Translation**           | Slides a shape to a new position   | Size and orientation stay the same        |
| **Reflection**            | Flips a shape over a mirror line   | Produces a mirror image                   |
| **Rotation**              | Turns a shape around a fixed point | Keeps size and shape, changes orientation |
| **Enlargement (scaling)** | Increases or decreases the size    | Angles stay same, sides scale by factor   |

---

### 🔹 1. Translation (Slide)

A **translation** moves every point by the same distance in the same direction.
Described as **"x right/left, y up/down."**
Example:

* Moving A(2, 3) **right 4, up 2** → new A′(6, 5).

**Rule notation:** (x, y) → (x + 4, y + 2)

**Translation Visual:**

<svg width="350" height="250" viewBox="0 0 350 250">
  <!-- Grid -->
  <defs>
    <pattern id="grid-trans" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#e0e0e0" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="350" height="250" fill="url(#grid-trans)"/>
  
  <!-- Axes -->
  <line x1="0" y1="180" x2="350" y2="180" stroke="#2a7" stroke-width="2"/>
  <line x1="30" y1="0" x2="30" y2="250" stroke="#2a7" stroke-width="2"/>
  
  <!-- Original triangle -->
  <polygon points="60,150 90,150 75,120" fill="#ff6b6b" opacity="0.6" stroke="#ff6b6b" stroke-width="2"/>
  <text x="70" y="170" font-size="13" fill="#ff6b6b" font-weight="bold">Original</text>
  
  <!-- Translated triangle -->
  <polygon points="180,90 210,90 195,60" fill="#4a9eff" opacity="0.6" stroke="#4a9eff" stroke-width="2"/>
  <text x="185" y="110" font-size="13" fill="#4a9eff" font-weight="bold">A′B′C′</text>
  
  <!-- Arrow showing translation -->
  <line x1="90" y1="130" x2="180" y2="80" stroke="#27ae60" stroke-width="2.5" stroke-dasharray="5 3" marker-end="url(#arrowgreen)"/>
  <defs>
    <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#27ae60"/>
    </marker>
  </defs>
  <text x="120" y="100" font-size="13" fill="#27ae60" font-weight="bold">+4 right, +2 up</text>
  
  <text x="175" y="230" font-size="14" fill="#333" font-weight="bold">Translation: Same shape, different position</text>
</svg>

✅ *Shape, size, and orientation stay identical.*

---

### 🔹 2. Reflection (Flip)

A **reflection** produces a mirror image across a **line of reflection** — often the x-axis, y-axis, or another line (like x = 2).

* Reflecting across the **x-axis** → change sign of y.
  (x, y) → (x, –y)
* Reflecting across the **y-axis** → change sign of x.
  (x, y) → (–x, y)

**Reflection Visuals:**

<svg width="700" height="280" viewBox="0 0 700 280">
  <!-- Reflection in x-axis -->
  <g>
    <rect width="340" height="280" fill="url(#grid-trans)"/>
    <line x1="0" y1="140" x2="340" y2="140" stroke="#ff6b6b" stroke-width="3"/>
    <line x1="170" y1="0" x2="170" y2="280" stroke="#2a7" stroke-width="2"/>
    <text x="300" y="135" font-size="12" fill="#ff6b6b" font-weight="bold">x-axis</text>
    
    <!-- Original shape above -->
    <polygon points="210,80 250,80 230,40" fill="#4a9eff" opacity="0.6" stroke="#4a9eff" stroke-width="2"/>
    <text x="220" y="105" font-size="12" fill="#4a9eff" font-weight="bold">ABC</text>
    
    <!-- Reflected shape below -->
    <polygon points="210,200 250,200 230,240" fill="#9b59b6" opacity="0.6" stroke="#9b59b6" stroke-width="2"/>
    <text x="220" y="190" font-size="12" fill="#9b59b6" font-weight="bold">A′B′C′</text>
    
    <text x="170" y="270" font-size="13" fill="#333" font-weight="bold" text-anchor="middle">Reflect in x-axis</text>
  </g>
  
  <!-- Reflection in y-axis -->
  <g transform="translate(360, 0)">
    <rect width="340" height="280" fill="url(#grid-trans)"/>
    <line x1="0" y1="140" x2="340" y2="140" stroke="#2a7" stroke-width="2"/>
    <line x1="170" y1="0" x2="170" y2="280" stroke="#ff6b6b" stroke-width="3"/>
    <text x="180" y="20" font-size="12" fill="#ff6b6b" font-weight="bold">y-axis</text>
    
    <!-- Original shape right -->
    <polygon points="230,100 270,100 250,60" fill="#4a9eff" opacity="0.6" stroke="#4a9eff" stroke-width="2"/>
    <text x="240" y="125" font-size="12" fill="#4a9eff" font-weight="bold">ABC</text>
    
    <!-- Reflected shape left -->
    <polygon points="110,100 70,100 90,60" fill="#27ae60" opacity="0.6" stroke="#27ae60" stroke-width="2"/>
    <text x="75" y="125" font-size="12" fill="#27ae60" font-weight="bold">A′B′C′</text>
    
    <text x="170" y="270" font-size="13" fill="#333" font-weight="bold" text-anchor="middle">Reflect in y-axis</text>
  </g>
</svg>

✅ *Shape and size same, orientation reversed.*

---

### 🔹 3. Rotation (Turn)

A **rotation** turns a shape around a **fixed point**, often the origin (0, 0).

* Common angles: 90°, 180°, 270°, 360°
* Direction
  * Clockwise (CW) 
  * Aniclockwise (ACW) or Counterclockwise

**Rotation Visuals:**

<!-- 90° clockwise rotation: (x, y) → (y, –x) -->
<svg width="320" height="320" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">

  <!-- Background -->
  <rect x="0" y="0" width="200" height="200" fill="white" />

  <!-- Axes -->
  <!-- x-axis -->
  <line x1="10" y1="100" x2="190" y2="100" stroke="#444" stroke-width="1.5" />
  <!-- arrow on +x -->
  <polygon points="188,95 190,100 188,105" fill="#444" />

  <!-- y-axis -->
  <line x1="100" y1="10" x2="100" y2="190" stroke="#444" stroke-width="1.5" />
  <!-- arrow on +y -->
  <polygon points="95,12 100,10 105,12" fill="#444" />

  <!-- Axis labels -->
  <text x="185" y="92" font-size="10" fill="#444">x</text>
  <text x="108" y="18" font-size="10" fill="#444">y</text>
  <text x="75" y="112" font-size="10" fill="#444">(0, 0)</text>

  <!-- Helper: we’re using scale 1 unit = 20px, origin at (100,100)
       Original point: (2, 3) → (140, 40)
       Rotated 90° clockwise: (3, –2) → (160, 140)
  -->

  <!-- Original point P = (2, 3) -->
  <circle cx="140" cy="40" r="4" fill="#2563eb" />
  <text x="145" y="35" font-size="10" fill="#2563eb">P (2, 3)</text>

  <!-- Rotated point P' = (3, –2) -->
  <circle cx="160" cy="140" r="4" fill="#f97316" />
  <text x="150" y="155" font-size="10" fill="#f97316">P' (3, −2)</text>

  <!-- Line from origin to original point -->
  <line x1="100" y1="100" x2="140" y2="40" stroke="#2563eb" stroke-width="1.2" stroke-dasharray="4 3" />

  <!-- Line from origin to rotated point -->
  <line x1="100" y1="100" x2="160" y2="140" stroke="#f97316" stroke-width="1.2" stroke-dasharray="4 3" />

  <!-- Curved arrow showing 90° clockwise rotation -->
  <path d="
    M 135 55
    A 50 50 0 0 1 150 105
  " fill="none" stroke="#16a34a" stroke-width="1.2" marker-end="url(#arrowhead)" />

  <!-- Arrowhead definition -->
  <defs>
    <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
      <polygon points="0,0 6,3 0,6" fill="#16a34a" />
    </marker>
  </defs>

  <!-- Angle label -->
  <text x="134" y="85" font-size="10" fill="#16a34a">90° clockwise</text>
</svg>


| Rotation                               | Transformation Rule | Example           |
| -------------------------------------- | ------------------- | ----------------- |
| 90° Clockwise  (or 270° ACW)           | (x, y) → ( y, −x )  | (2, 3) → (3, −2)  |
| 180° (either direction)                | (x, y) → ( −x, −y ) | (2, 3) → (−2, −3) |
| 270° Clockwise (or 90° ACW)            | (x, y) → ( −y, x )  | (2, 3) → (−3, 2)  |
| 360°  (either direction)               | (x, y) → ( x, y )   | (2, 3) → (2, 3)   |

✅ *Shape and size same, orientation changes depending on rotation direction.*

---

### 🔹 4. Enlargement (Scaling)

An **enlargement** changes the **size** of the shape, but not its shape.

* Defined by a **scale factor (k)** and a **centre of enlargement**.
* Coordinates are multiplied by the scale factor:
  (x, y) → (kx, ky).

If k > 1 → shape grows.
If 0 < k < 1 → shape shrinks.

**Enlargement Visual:**

<svg width="400" height="350" viewBox="0 0 400 350">
  <!-- Grid -->
  <rect width="400" height="350" fill="url(#grid-trans)"/>
  
  <!-- Axes -->
  <line x1="0" y1="280" x2="400" y2="280" stroke="#2a7" stroke-width="2"/>
  <line x1="40" y1="0" x2="40" y2="350" stroke="#2a7" stroke-width="2"/>
  
  <!-- Center of enlargement (origin) -->
  <circle cx="40" cy="280" r="5" fill="#ff6b6b"/>
  <text x="45" y="295" font-size="12" fill="#ff6b6b" font-weight="bold">Centre (0,0)</text>
  
  <!-- Original small triangle -->
  <polygon points="100,250 130,250 115,220" fill="#4a9eff" opacity="0.6" stroke="#4a9eff" stroke-width="2"/>
  <text x="105" y="270" font-size="13" fill="#4a9eff" font-weight="bold">Original</text>
  
  <!-- Enlarged triangle (scale factor 2) -->
  <polygon points="160,190 220,190 190,130" fill="#27ae60" opacity="0.5" stroke="#27ae60" stroke-width="2.5"/>
  <text x="175" y="210" font-size="13" fill="#27ae60" font-weight="bold">Enlarged ×2</text>
  
  <!-- Lines from center to show enlargement -->
  <line x1="40" y1="280" x2="100" y2="250" stroke="#9b59b6" stroke-width="1.5" stroke-dasharray="3 2"/>
  <line x1="40" y1="280" x2="160" y2="190" stroke="#9b59b6" stroke-width="1.5" stroke-dasharray="3 2"/>
  
  <line x1="40" y1="280" x2="130" y2="250" stroke="#9b59b6" stroke-width="1.5" stroke-dasharray="3 2"/>
  <line x1="40" y1="280" x2="220" y2="190" stroke="#9b59b6" stroke-width="1.5" stroke-dasharray="3 2"/>
  
  <line x1="40" y1="280" x2="115" y2="220" stroke="#9b59b6" stroke-width="1.5" stroke-dasharray="3 2"/>
  <line x1="40" y1="280" x2="190" y2="130" stroke="#9b59b6" stroke-width="1.5" stroke-dasharray="3 2"/>
  
  <text x="200" y="330" font-size="14" fill="#333" font-weight="bold" text-anchor="middle">Scale factor = 2</text>
  <text x="200" y="345" font-size="12" fill="#555" text-anchor="middle">(All distances from centre doubled)</text>
</svg>

✅ *Angles stay same; sides scale proportionally.*

---

### 🧭 Common Mistakes to Avoid:

* Mixing up direction in translations (x = left/right, y = up/down).
* Forgetting to switch signs correctly when reflecting.
* Rotating the wrong way (clockwise vs anticlockwise).
* Confusing enlargement with just translation.

---

### 🧮 Examples:

1. **Translation**

   * Move (2, 5) by +3 in x and –2 in y → (5, 3).

2. **Reflection**

   * Reflect (–4, 3) in the x-axis → (–4, –3).

3. **Rotation 180°**

   * Rotate (3, 4) 180° about origin → (–3, –4).

4. **Rotation 90° clockwise**

   * (x, y) → (y, –x): (2, 5) → (5, –2).

5. **Enlargement**

   * Scale factor 2 about origin: (3, 1) → (6, 2).

---

### 🧩 Word Problems:

#### 🔹 Easy

1. What does a translation do to a shape?
2. A reflection across the x-axis changes which coordinate?
3. Rotate (3, 4) 180° about origin.
4. Reflect (2, 5) in the y-axis.
5. Move (4, 1) right 3 and up 2.
6. What are the coordinates of the origin?
7. Enlargement with scale factor 2 of (2, 3) → ?
8. Reflect (–3, 2) in the x-axis.
9. A rotation of 180° changes the sign of which coordinates?
10. Translate (–2, –1) left 3, up 4.

#### 🔸 Medium

11. A triangle with vertices A(1, 1), B(3, 1), C(1, 4) is translated right 2 and up 1. Write A′, B′, C′.
12. Reflect (4, –2) in the y-axis.
13. Reflect (–5, –3) in the x-axis.
14. Rotate (2, 5) 90° clockwise about origin.
15. Rotate (–2, –6) 90° anticlockwise about origin.
16. Enlarge (2, –3) by scale factor 3 about origin.
17. Translate (3, 4) by (–2, –5).
18. A point (–4, 7) is reflected in both axes. Find result.
19. Rotate (5, 0) by 90° anticlockwise about origin.
20. Enlarge (–2, 4) by scale factor ½ about origin.

#### 🔺 Hard

21. Triangle A(0, 0), B(3, 0), C(3, 2) is rotated 180° about origin. Write A′, B′, C′.
22. Reflect (x, y) in the line y = x.
23. Translate (–3, –4) by (6, –2), then reflect in x-axis.
24. Rotate (2, –1) 90° anticlockwise about origin, then translate by (+3, +2).
25. Enlarge (4, 2) by scale factor –1 (through origin).
26. A triangle with coordinates (2, 1), (4, 1), (2, 3) is reflected in the line x = 0. Write the new coordinates.
27. A shape is enlarged by scale factor 3. How do its side lengths and area change?
28. Rotate (–3, 4) 270° clockwise about origin.
29. Reflect (–5, –2) in line y = –x.
30. A square with corners (1, 1), (3, 1), (3, 3), (1, 3) is enlarged by factor 2 about origin. Find the new coordinates.

---

### ✅ Answers:

1. Moves (slides) the shape without turning or flipping.

2. y-coordinate changes sign.

3. (–3, –4).

4. (–2, 5).

5. (7, 3).

6. (0, 0).

7. (4, 6).

8. (–3, –2).

9. Both x and y.

10. (–5, 3).

11. A′(3, 2), B′(5, 2), C′(3, 5).

12. (–4, –2).

13. (–5, 3).

14. (5, –2).

15. (6, –2).

16. (6, –9).

17. (1, –1).

18. (4, –7) → reflect in both → (4, –7) → (4, –7)? Wait—(–4, –7)? Let's check: (–4, 7) → reflect x-axis → (–4, –7). ✅

19. (0, 5) → anticlockwise → (–0, 5)? Wait—rotate 90° anticlockwise: (x, y) → (–y, x) → (–0, 5)? That’s (0, 5)? Recheck: (5, 0) → (0, 5). ✅

20. (–1, 2).

21. A′(0, 0), B′(–3, 0), C′(–3, –2).

22. (y, x).

23. (–3+6, –4–2) → (3, –6); reflect in x-axis → (3, 6).

24. 90° anticlockwise: (x, y) → (–y, x) → (–(–1), 2) → (1, 2); translate (+3, +2) → (4, 4).

25. (–4, –2). (Flips through origin).

26. Reflect in x=0 → x changes sign → (–2, 1), (–4, 1), (–2, 3).

27. Side lengths ×3; area ×9.

28. (4, 3). (270° clockwise = 90° anticlockwise → (–y, x))

29. (2, 5). (Reflect in y = –x swaps and changes both signs).

30. Multiply each coordinate by 2 → (2, 2), (6, 2), (6, 6), (2, 6).

---

✅ **Summary of Transformation Rules**

| Transformation         | Rule                    | Description                |
| ---------------------- | ----------------------- | -------------------------- |
| Translation            | (x, y) → (x + a, y + b) | Slide right/left/up/down   |
| Reflection in x-axis   | (x, y) → (x, –y)        | Flip over x-axis           |
| Reflection in y-axis   | (x, y) → (–x, y)        | Flip over y-axis           |
| Rotation 90° CW        | (x, y) → (y, –x)        | Turn right angle clockwise |
| Rotation 90° ACW       | (x, y) → (–y, x)        | Turn left angle            |
| Rotation 180°          | (x, y) → (–x, –y)       | Half turn                  |
| Enlargement (factor k) | (x, y) → (kx, ky)       | Scales size by k           |

---
