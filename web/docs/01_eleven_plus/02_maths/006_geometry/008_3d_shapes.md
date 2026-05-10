# 3D shapes

### 📘 Explanation:

3D shapes are solids that take up space. You can hold them in your hand. Each 3D shape is made from flat parts called faces, joined by edges (straight lines) and vertices (corners).

**Common 3D Shapes:**

<svg width="800" height="500" viewBox="0 0 800 500">
  {/* Cube */}
  <g>
    <text x="70" y="20" font-size="16" fill="#333" font-weight="bold" text-anchor="middle">Cube</text>
    {/* Front face */}
    <rect x="30" y="45" width="70" height="70" fill="#eaf7ff" stroke="#2a7" stroke-width="2.5"/>
    {/* Back face (offset) */}
    <rect x="50" y="25" width="70" height="70" fill="none" stroke="#2a7" stroke-width="2.5"/>
    {/* Connecting edges */}
    <line x1="30" y1="45" x2="50" y2="25" stroke="#2a7" stroke-width="2.5"/>
    <line x1="100" y1="45" x2="120" y2="25" stroke="#2a7" stroke-width="2.5"/>
    <line x1="30" y1="115" x2="50" y2="95" stroke="#2a7" stroke-width="2.5"/>
    <line x1="100" y1="115" x2="120" y2="95" stroke="#2a7" stroke-width="2.5"/>
    <text x="70" y="145" font-size="11" fill="#555" text-anchor="middle">6 faces, 12 edges</text>
    <text x="70" y="160" font-size="11" fill="#555" text-anchor="middle">8 vertices</text>
  </g>
  
  {/* Cuboid */}
  <g transform="translate(150, 0)">
    <text x="70" y="20" font-size="16" fill="#333" font-weight="bold" text-anchor="middle">Cuboid</text>
    {/* Front face */}
    <rect x="25" y="50" width="90" height="55" fill="#eaf7ff" stroke="#2a7" stroke-width="2.5"/>
    {/* Back face */}
    <rect x="45" y="30" width="90" height="55" fill="none" stroke="#2a7" stroke-width="2.5"/>
    {/* Connecting edges */}
    <line x1="25" y1="50" x2="45" y2="30" stroke="#2a7" stroke-width="2.5"/>
    <line x1="115" y1="50" x2="135" y2="30" stroke="#2a7" stroke-width="2.5"/>
    <line x1="25" y1="105" x2="45" y2="85" stroke="#2a7" stroke-width="2.5"/>
    <line x1="115" y1="105" x2="135" y2="85" stroke="#2a7" stroke-width="2.5"/>
    <text x="70" y="130" font-size="11" fill="#555" text-anchor="middle">6 rectangular faces</text>
    <text x="70" y="145" font-size="11" fill="#555" text-anchor="middle">(like a cereal box)</text>
  </g>
  
  {/* Cylinder */}
  <g transform="translate(320, 0)">
    <text x="60" y="20" font-size="16" fill="#333" font-weight="bold" text-anchor="middle">Cylinder</text>
    {/* Top ellipse */}
    <ellipse cx="60" cy="45" rx="35" ry="10" fill="none" stroke="#2a7" stroke-width="2.5"/>
    {/* Sides */}
    <line x1="25" y1="45" x2="25" y2="105" stroke="#2a7" stroke-width="2.5"/>
    <line x1="95" y1="45" x2="95" y2="105" stroke="#2a7" stroke-width="2.5"/>
    {/* Bottom ellipse */}
    <ellipse cx="60" cy="105" rx="35" ry="10" fill="#eaf7ff" stroke="#2a7" stroke-width="2.5"/>
    {/* Fill body */}
    <path d="M 25 45 L 25 105 A 35 10 0 0 0 95 105 L 95 45" fill="#eaf7ff" stroke="none"/>
    {/* Redraw top */}
    <ellipse cx="60" cy="45" rx="35" ry="10" fill="none" stroke="#2a7" stroke-width="2.5"/>
    <text x="60" y="135" font-size="11" fill="#555" text-anchor="middle">2 circular faces</text>
    <text x="60" y="150" font-size="11" fill="#555" text-anchor="middle">1 curved surface</text>
  </g>
  
  {/* Sphere */}
  <g transform="translate(460, 0)">
    <text x="60" y="20" font-size="16" fill="#333" font-weight="bold" text-anchor="middle">Sphere</text>
    <circle cx="60" cy="75" r="40" fill="#eaf7ff" stroke="#2a7" stroke-width="2.5"/>
    {/* Horizontal ellipse (equator) */}
    <ellipse cx="60" cy="75" rx="40" ry="10" fill="none" stroke="#4a9eff" stroke-width="1.5" stroke-dasharray="4 3"/>
    {/* Vertical ellipse (meridian) */}
    <ellipse cx="60" cy="75" rx="10" ry="40" fill="none" stroke="#4a9eff" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="60" y="135" font-size="11" fill="#555" text-anchor="middle">No flat faces</text>
    <text x="60" y="150" font-size="11" fill="#555" text-anchor="middle">Perfectly round</text>
  </g>
  
  {/* Cone */}
  <g transform="translate(610, 0)">
    <text x="60" y="20" font-size="16" fill="#333" font-weight="bold" text-anchor="middle">Cone</text>
    {/* Cone body (triangle outline) */}
    <path d="M 60 40 L 25 105 A 35 10 0 0 0 95 105 Z" fill="#eaf7ff" stroke="#2a7" stroke-width="2.5"/>
    {/* Base ellipse */}
    <ellipse cx="60" cy="105" rx="35" ry="10" fill="#eaf7ff" stroke="#2a7" stroke-width="2.5"/>
    <text x="60" y="135" font-size="11" fill="#555" text-anchor="middle">1 circular face</text>
    <text x="60" y="150" font-size="11" fill="#555" text-anchor="middle">1 curved surface</text>
  </g>
  
  {/* Square Pyramid */}
  <g transform="translate(60, 200)">
    <text x="65" y="20" font-size="16" fill="#333" font-weight="bold" text-anchor="middle">Square Pyramid</text>
    {/* Base square (in perspective) */}
    <polygon points="35,110 95,110 105,100 45,100" fill="#eaf7ff" stroke="#2a7" stroke-width="2.5"/>
    {/* Back triangular face */}
    <polygon points="65,45 45,100 105,100" fill="#d4ebff" stroke="#2a7" stroke-width="2.5"/>
    {/* Right triangular face */}
    <polygon points="65,45 95,110 105,100" fill="#bde0ff" stroke="#2a7" stroke-width="2.5"/>
    {/* Front left triangular face */}
    <polygon points="65,45 35,110 95,110" fill="#eaf7ff" stroke="#2a7" stroke-width="2.5"/>
    <text x="65" y="140" font-size="11" fill="#555" text-anchor="middle">1 square base</text>
    <text x="65" y="155" font-size="11" fill="#555" text-anchor="middle">4 triangular faces</text>
  </g>
  
  {/* Net of a Cube */}
  <g transform="translate(240, 210)">
    <text x="100" y="10" font-size="16" fill="#333" font-weight="bold" text-anchor="middle">Net of a Cube</text>
    {/* Cross-shaped net */}
    <rect x="70" y="30" width="35" height="35" fill="#ffcccc" stroke="#ff6b6b" stroke-width="2"/>
    <rect x="35" y="65" width="35" height="35" fill="#ffe6e6" stroke="#ff6b6b" stroke-width="2"/>
    <rect x="70" y="65" width="35" height="35" fill="#ffe6e6" stroke="#ff6b6b" stroke-width="2"/>
    <rect x="105" y="65" width="35" height="35" fill="#ffe6e6" stroke="#ff6b6b" stroke-width="2"/>
    <rect x="140" y="65" width="35" height="35" fill="#ffe6e6" stroke="#ff6b6b" stroke-width="2"/>
    <rect x="70" y="100" width="35" height="35" fill="#ffe6e6" stroke="#ff6b6b" stroke-width="2"/>
    <text x="100" y="155" font-size="11" fill="#555" text-anchor="middle">2D pattern that</text>
    <text x="100" y="170" font-size="11" fill="#555" text-anchor="middle">folds into 3D shape</text>
  </g>
  
  {/* Key Concepts */}
  <g transform="translate(470, 210)">
    <text x="130" y="10" font-size="16" fill="#333" font-weight="bold" text-anchor="middle">Key Concepts</text>
    
    {/* Volume box */}
    <rect x="30" y="30" width="85" height="50" fill="#e8f5e9" stroke="#27ae60" stroke-width="2.5"/>
    <text x="72" y="55" font-size="13" fill="#27ae60" font-weight="bold" text-anchor="middle">Volume</text>
    <text x="72" y="70" font-size="10" fill="#555" text-anchor="middle">(inside space)</text>
    <text x="72" y="95" font-size="9" fill="#555" text-anchor="middle">cubic units (cm³)</text>
    
    {/* Surface Area box */}
    <rect x="145" y="30" width="85" height="50" fill="#fff3e0" stroke="#f39c12" stroke-width="2.5"/>
    <text x="187" y="50" font-size="13" fill="#f39c12" font-weight="bold" text-anchor="middle">Surface</text>
    <text x="187" y="65" font-size="13" fill="#f39c12" font-weight="bold" text-anchor="middle">Area</text>
    <text x="187" y="95" font-size="9" fill="#555" text-anchor="middle">square units (cm²)</text>
    
    {/* Euler's Formula */}
    <text x="130" y="120" font-size="13" fill="#333" font-weight="bold" text-anchor="middle">Euler's Formula:</text>
    <text x="130" y="140" font-size="14" fill="#9b59b6" font-weight="bold" text-anchor="middle">F + V = E + 2</text>
    <text x="130" y="157" font-size="10" fill="#555" text-anchor="middle">Faces + Vertices</text>
    <text x="130" y="170" font-size="10" fill="#555" text-anchor="middle">= Edges + 2</text>
  </g>
</svg>

* Cube: 6 square faces, all sides equal (like an ice cube).
* Cuboid (rectangular prism): 6 rectangular faces (like a cereal box).
* Cylinder: 2 circular faces and a curved surface (like a tin of soup).
* Sphere: no flat faces, perfectly round (like a football).
* Cone: 1 circular face and a curved surface meeting at a point (like an ice-cream cone).
* Square-based pyramid: a square base and 4 triangular faces meeting at a top vertex (like a small tent).

Key ideas:

* Nets: a net is a 2D pattern that folds into a 3D shape. Think of cutting a cardboard box and laying it flat.
* Surface area: total area of all faces on the outside (like how much wrapping paper you need).
* Volume: how much space a shape contains (like how much water fills it). For easy cases:

  * Volume of cube: side × side × side.
  * Volume of cuboid: length × width × height.
  * For cylinders and cones we’ll mostly use reasoning or simple numbers only when tidy.
* Faces–Edges–Vertices: count systematically. Tip: start at the top and go around, then the bottom.
* Euler’s rule for many solids: faces + vertices = edges + 2 (useful for checking).

Common mistakes to avoid:

* Mixing up surface area and volume (outside vs inside).
* Forgetting to count the top and bottom faces.
* Misreading a net: squares vs rectangles, triangles pointing the wrong way.
* Unit slips: area in square units (cm²), volume in cubic units (cm³).

---

### 🧮 Examples:

1. Counting features (cube)

   * A cube has how many faces, edges, and vertices?
   * Step-by-step: Picture a dice. Faces 6. Each face has 4 edges but each edge is shared; total edges 12. Corners 8.
   * Answer: 6 faces, 12 edges, 8 vertices.
   * Common mistake: Saying 24 edges (double-counting).

2. Choose the correct net (cuboid)

   * A cuboid has faces sized 6 by 4 (two), 6 by 3 (two), 4 by 3 (two). Which net could work?
   * Method: A valid net must include all 6 faces with correct sizes and fold without overlaps. One common layout is a cross of 4 rectangles in a row, with one attached above and one below a middle face.
   * Tip: Check counts: two of each size and all can meet edge-to-edge.

3. Surface area (gift wrap for a cube)

   * A cube with side 5 cm. How much paper to cover it?
   * Each face area: 5 × 5 = 25 cm². Six faces: 6 × 25 = 150 cm².
   * Answer: 150 cm².
   * Common mistake: Using 5 + 5 + 5 or mixing up perimeter and area.

4. Volume (shoe box)

   * A shoebox (cuboid) is 30 cm by 20 cm by 10 cm. What is its volume?
   * Multiply: 30 × 20 = 600; 600 × 10 = 6000 cm³.
   * Answer: 6000 cm³.
   * Real-life link: This is how many cubic centimetres of space the box can hold.

5. Reasoning with cylinders (tins)

   * Two tins have equal height. Tin A has a base circle of radius 3 cm, Tin B of radius 4 cm. Which holds more?
   * The one with larger circular base holds more if height is equal. Circle with radius 4 cm is larger than radius 3 cm.
   * Answer: Tin B.
   * Common mistake: Comparing diameters vs radii incorrectly.

---

### 🧩 Word Problems:

#### 🔹 Easy

1. How many faces does a cuboid have?
2. A cube has side 4 cm. What is its volume?
3. A cylinder has a circular top and a circular bottom. How many flat faces does it have?
4. Which shape has no flat faces: sphere, cube, or cone?
5. A dice is a model of which 3D shape?
6. A square-based pyramid has how many triangular faces?
7. A cereal box is best modelled by which shape?
8. A cube has side 3 cm. What is the area of one face?
9. A tin can is which 3D shape?
10. Which has a vertex at the tip: cone or cylinder?

#### 🔸 Medium

11. A small cube has side 2 cm. You paint the outside red. How many faces are painted on the cube?
12. A gift box is 10 cm by 8 cm by 6 cm. Find its volume.
13. A cuboid has faces: two 8×5, two 8×3, two 5×3. Which dimension is the height if the base is 8×5?
14. A net for a cube uses 6 equal squares of side 3 cm. What total area does the net cover?
15. A rectangular fish tank (no lid) is 40 cm by 25 cm by 20 cm. What is the glass area needed for the sides and base?
16. A square-based pyramid has 5 faces and 5 vertices. Use Euler’s rule to find the number of edges.
17. A carton is a cuboid 12 cm by 7 cm by 5 cm. How many 1 cm cubes fit inside exactly?
18. A cylinder and a cone have the same circular base and the same height. Which holds more and by what factor?
19. A dice shows 6 faces. If each edge measures 1.5 cm, what is the surface area of the dice?
20. Two identical cubes are glued face-to-face to make a new solid. If each cube has side 3 cm, how many faces does the new solid have?

#### 🔺 Hard

21. A cuboid measures 15 cm by 10 cm by 6 cm. You wrap it fully. What is the smallest possible amount of paper in cm² (surface area)?
22. A cube of side 6 cm is cut into 8 equal smaller cubes. What is the side length of each small cube and the total surface area of all 8 cubes after cutting them apart?
23. A storage box is 24 cm by 18 cm by 12 cm. You pack small toy boxes sized 6 cm by 6 cm by 6 cm tightly with no gaps. How many fit?
24. A net for a square-based pyramid has a square of side 8 cm and four identical isosceles triangles each with base 8 cm and height 5 cm. Find the total area of the net.
25. A closed cylindrical tin and a closed cuboid have the same height 10 cm. The cylinder’s circular base has diameter 6 cm. The cuboid base is 5 cm by 6 cm. Which has the larger surface area?
26. A hollow open-top box is made from a 20 cm by 16 cm card by cutting equal squares from each corner and folding. If the cut-out squares are 3 cm each, find the volume of the box.
27. A solid is made by placing a square-based pyramid exactly on top of a cube so their square faces match. The cube side is 6 cm; the pyramid’s slant height is not needed. How many faces does the combined solid have?
28. A cone and a cylinder share the same base radius and height. If the cylinder holds 600 ml, how much does the cone hold?
29. A cuboid has surface area 94 cm² with dimensions in whole centimetres. One face is 3 cm by 4 cm. Find the third dimension.
30. A large cube is built from 27 small cubes (3 by 3 by 3). If the outside of the large cube is painted, how many small cubes have exactly 1 face painted?

---

### ✅ Answers:

1. 6 faces.

2. 64 cm³. (4 × 4 × 4)

3. 2 flat faces.

4. Sphere.

5. Cube.

6. 4 triangular faces.

7. Cuboid.

8. 9 cm². (3 × 3)

9. Cylinder.

10. Cone.

11. 6 faces. (All outer faces of a cube are painted)

12. 480 cm³. (10 × 8 × 6)

13. Height is 3 cm. (Base 8×5; remaining dimension is height)

14. 54 cm². (6 faces × 3×3)

15. 3,300 cm². (Base 40×25=1000; sides: 2×(40×20)=1600 and 2×(25×20)=1000; total 1000+1600+1000=3600; remove lid so exclude top 40×25=1000; 4600−1000=3600? Careful: “no lid” means base + 4 sides only: base 1000 + sides 1600 + 1000 = 3600 cm²)
    Final: 3600 cm².

16. 8 edges. (Faces + vertices = edges + 2 ⇒ 5 + 5 = E + 2 ⇒ E = 8)

17. 5040 cubes. (12×7×5 × 1×1×1 ⇒ 12×7×5 = 420; wait units: dimensions 12,7,5 cm; 1 cm cubes: 12×7×5 = 420, not 5040)
    Final: 420 cubes.

18. Cylinder; by a factor of 3. (Cylinder volume is 3× the cone for same base and height)

19. 13.5 cm². (Each face 1.5×1.5=2.25; 6 faces ⇒ 13.5)

20. 10 faces. (Each cube has 6; glued faces disappear: 6+6−2 = 10)

21. 660 cm². (Surface area of cuboid: 2(lw+lh+wh) = 2(15×10 + 15×6 + 10×6) = 2(150 + 90 + 60) = 2×300 = 600 cm²)
    Oops—recheck: 150+90+60 = 300; ×2 = 600 cm².
    Final: 600 cm².

22. Side 3 cm; total SA 8 × (6 faces × 3×3) = 8 × 54 = 432 cm². (Original 6 cm cube cut into 2×2×2 ⇒ side halves to 3 cm)

23. 24 boxes. (24/6=4, 18/6=3, 12/6=2; 4×3×2 = 24)

24. 144 cm². (Square: 8×8=64; each triangle area 1/2×8×5=20; four triangles 80; total 64+80=144 cm²)

25. Cylinder SA: 2 circles + side = 2×(π×3²) + (circumference×height) = 18π + (6π×10) = 18π + 60π = 78π ≈ 245. Cuboid SA: 2(lw+lh+wh) = 2(5×6 + 5×10 + 6×10) = 2(30 + 50 + 60) = 2×140 = 280.
    Larger: cuboid (≈280 > ≈245).

26. Volume = base area × height. New base: (20−2×3) by (16−2×3) = 14 by 10. Height 3. Volume = 14×10×3 = 420 cm³.

27. 9 faces. (Cube has 6; pyramid has 5; shared square becomes internal, so 6+5−2=9)

28. 200 ml. (Cone is one-third of cylinder: 600 ÷ 3)

29. 3rd dimension is 5 cm. (Faces: 3×4=12; let third be h. SA = 2(12 + 3h + 4h) = 2(12 + 7h) = 24 + 14h = 94 ⇒ 14h = 70 ⇒ h = 5)

30. 6 cubes. (On a 3×3×3 painted outside: cubes with exactly 1 face painted are the centre cubes on each face: 6)

---

If you’d like, I can now generate the next topic (“Triangles”) in the same format.
