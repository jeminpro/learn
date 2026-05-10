# 🔵 Venn Diagrams

### 📘 Explanation:

A **Venn diagram** shows how **groups (sets)** of things are related — using **overlapping circles**.
Each circle represents a group, and where circles **overlap**, that area shows items that belong to **both groups**.

It's a great way to visualise **shared**, **unique**, and **total** information.

<div style={{textAlign: 'center', margin: '20px 0'}}>
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  {/* Circle A */}
  <circle cx="140" cy="125" r="80" fill="#ff6b6b" fillOpacity="0.4" stroke="#c92a2a" strokeWidth="2"/>
  {/* Circle B */}
  <circle cx="260" cy="125" r="80" fill="#4dabf7" fillOpacity="0.4" stroke="#1971c2" strokeWidth="2"/>
  
  {/* Labels */}
  <text x="100" y="125" fontSize="16" fontWeight="bold" fill="#000">Set A</text>
  <text x="270" y="125" fontSize="16" fontWeight="bold" fill="#000">Set B</text>
  <text x="185" y="125" fontSize="14" fontWeight="bold" fill="#000">Both</text>
  
  {/* Annotations */}
  <text x="200" y="30" fontSize="14" fontWeight="bold" fill="#495057" textAnchor="middle">Basic Venn Diagram</text>
  <text x="60" y="220" fontSize="12" fill="#495057">Only A</text>
  <text x="320" y="220" fontSize="12" fill="#495057">Only B</text>
  <text x="200" y="220" fontSize="12" fill="#495057" textAnchor="middle">A and B</text>
</svg>
</div>

---

### 🔹 Key ideas

* Each **circle = one group (set)**.
* The **overlap** = items that belong to **both groups**.
* The **outside area** = items not in any group.
* In a **3-circle Venn diagram**, some parts may belong to **two or even all three groups**.
* You can count, compare, or find missing totals using Venn logic.

---

### ⚠️ Common mistakes

* Double-counting items in the overlap.
* Forgetting to include “neither” group.
* Mixing up what each circle stands for.
* Not checking if the question asks for “only”, “both”, or “neither”.

---

### 🧮 Examples

#### Example 1 – Two circles

| Group    | Meaning                |
| :------- | :--------------------- |
| Circle A | Children who like dogs |
| Circle B | Children who like cats |

If 5 children like both, 8 only dogs, and 7 only cats:
→ Total = 8 + 7 + 5 = **20 children**

<div style={{textAlign: 'center', margin: '20px 0'}}>
<svg width="400" height="250" xmlns="http://www.w3.org/2000/svg">
  {/* Circle A - Dogs */}
  <circle cx="140" cy="125" r="80" fill="#ffd43b" fillOpacity="0.4" stroke="#fab005" strokeWidth="2"/>
  {/* Circle B - Cats */}
  <circle cx="260" cy="125" r="80" fill="#a9e34b" fillOpacity="0.4" stroke="#74b816" strokeWidth="2"/>
  
  {/* Numbers */}
  <text x="100" y="130" fontSize="24" fontWeight="bold" fill="#000">8</text>
  <text x="305" y="130" fontSize="24" fontWeight="bold" fill="#000">7</text>
  <text x="193" y="130" fontSize="24" fontWeight="bold" fill="#000">5</text>
  
  {/* Labels */}
  <text x="100" y="70" fontSize="14" fontWeight="bold" fill="#495057">Dogs</text>
  <text x="285" y="70" fontSize="14" fontWeight="bold" fill="#495057">Cats</text>
  
  {/* Description */}
  <text x="200" y="220" fontSize="12" fill="#495057" textAnchor="middle">Total: 8 + 7 + 5 = 20 children</text>
</svg>
</div>

---

#### Example 2 – Adding "neither"

If 20 pupils took part in a survey:

* 8 like chocolate only
* 6 like vanilla only
* 4 like both
  Then 8 + 6 + 4 = 18
  → 2 pupils like **neither**.

<div style={{textAlign: 'center', margin: '20px 0'}}>
<svg width="450" height="280" xmlns="http://www.w3.org/2000/svg">
  {/* Rectangle for "universe" */}
  <rect x="20" y="20" width="410" height="240" fill="#f8f9fa" stroke="#495057" strokeWidth="2" rx="5"/>
  
  {/* Circle A - Chocolate */}
  <circle cx="160" cy="140" r="70" fill="#cc5de8" fillOpacity="0.4" stroke="#9c36b5" strokeWidth="2"/>
  {/* Circle B - Vanilla */}
  <circle cx="270" cy="140" r="70" fill="#ffc9c9" fillOpacity="0.4" stroke="#ff6b6b" strokeWidth="2"/>
  
  {/* Numbers */}
  <text x="125" y="145" fontSize="22" fontWeight="bold" fill="#000">8</text>
  <text x="295" y="145" fontSize="22" fontWeight="bold" fill="#000">6</text>
  <text x="209" y="145" fontSize="22" fontWeight="bold" fill="#000">4</text>
  
  {/* Neither box */}
  <text x="360" y="50" fontSize="20" fontWeight="bold" fill="#c92a2a">2</text>
  <text x="350" y="70" fontSize="11" fill="#495057">neither</text>
  
  {/* Labels */}
  <text x="125" y="90" fontSize="13" fontWeight="bold" fill="#495057">Chocolate</text>
  <text x="270" y="90" fontSize="13" fontWeight="bold" fill="#495057">Vanilla</text>
  <text x="30" y="250" fontSize="11" fill="#495057">Total = 20 pupils</text>
</svg>
</div>

---

#### Example 3 – Finding the overlap

If 10 like red, 12 like blue, and 4 like both:
→ Total = 10 + 12 − 4 = **18**
(Remember to subtract the overlap once — it’s counted twice otherwise!)

---

#### Example 4 – Three-circle logic (concept only)

If you have sets A, B, C (e.g. **Maths**, **Science**, **English**):

* Some pupils may be in A∩B (both Maths & Science)
* Some in B∩C, or all three
* You always start filling from the **centre** outward.

<div style={{textAlign: 'center', margin: '20px 0'}}>
<svg width="450" height="320" xmlns="http://www.w3.org/2000/svg">
  {/* Three overlapping circles */}
  {/* Circle A - Maths */}
  <circle cx="180" cy="130" r="75" fill="#ffd43b" fillOpacity="0.3" stroke="#fab005" strokeWidth="2"/>
  {/* Circle B - Science */}
  <circle cx="270" cy="130" r="75" fill="#51cf66" fillOpacity="0.3" stroke="#2f9e44" strokeWidth="2"/>
  {/* Circle C - English */}
  <circle cx="225" cy="200" r="75" fill="#74c0fc" fillOpacity="0.3" stroke="#1971c2" strokeWidth="2"/>
  
  {/* Labels for each circle */}
  <text x="140" y="90" fontSize="13" fontWeight="bold" fill="#495057">Maths</text>
  <text x="280" y="90" fontSize="13" fontWeight="bold" fill="#495057">Science</text>
  <text x="205" y="270" fontSize="13" fontWeight="bold" fill="#495057">English</text>
  
  {/* Region labels */}
  <text x="150" y="135" fontSize="11" fill="#000">Only A</text>
  <text x="285" y="135" fontSize="11" fill="#000">Only B</text>
  <text x="215" y="230" fontSize="11" fill="#000">Only C</text>
  
  <text x="210" y="125" fontSize="10" fill="#000">A∩B</text>
  <text x="250" y="175" fontSize="10" fill="#000">B∩C</text>
  <text x="175" y="175" fontSize="10" fill="#000">A∩C</text>
  
  <text x="215" y="155" fontSize="10" fontWeight="bold" fill="#c92a2a">All 3</text>
  
  {/* Title */}
  <text x="225" y="30" fontSize="14" fontWeight="bold" fill="#495057" textAnchor="middle">Three-Circle Venn Diagram</text>
  <text x="225" y="305" fontSize="11" fill="#495057" textAnchor="middle">Start filling from centre outward</text>
</svg>
</div>

---

#### Example 5 – “Only” vs “Both”

If 5 pupils like **only** apples and 3 like **both** apples & bananas:
→ Apple circle = 5 + 3 = **8 pupils total in that circle**

---

### 🧩 Word Problems

#### 🔹 Easy

1. In a class of 20, 8 like pizza, 6 like pasta, 4 like both. How many like at least one?
2. 10 like apples, 7 like oranges, 3 like both. Total?
3. 15 pupils like football, 5 like both football & cricket, 10 like only cricket. Total?
4. 6 like cats only, 4 like dogs only, 2 like both. Total?
5. In a survey of 25 children, 5 like neither. How many like something?
6. 8 in total like chocolate; 5 of them also like strawberry. How many like only chocolate?
7. 12 like reading, 8 like painting, 4 like both. How many like only painting?
8. 9 like red, 6 like blue, 3 like both. How many like only red?
9. 10 play piano, 15 play guitar, 5 play both. How many play exactly one?
10. If 4 belong to both sets A and B, and total = 16, how many are in only one set?

---

#### 🔸 Medium

11. 40 students: 15 like dogs only, 10 like cats only, 5 like both. How many like neither?
12. 25 people: 12 like tea, 10 like coffee, 5 like both. How many like only one?
13. 30 pupils: 8 like cricket only, 12 football only, 5 both. How many like at least one?
14. 100 children: 40 like Maths, 30 like English, 20 both. How many like neither?
15. 50 students: 20 like red only, 10 blue only, 5 both. Total liking at least one?
16. 30 pupils: 10 like pizza, 15 pasta, 5 both. Find total who like at least one.
17. 28 pupils: 8 only apples, 10 only bananas, 4 both, rest none. Find number who like neither.
18. 40 children: 12 like football only, 15 cricket only, 5 both. How many neither?
19. 32 children: 12 like tennis only, 10 like swimming only, 6 both. How many total?
20. 25 pupils: 6 like only A, 5 like only B, 4 like both. How many like neither?

---

#### 🔺 Hard

21. 100 surveyed: 40 like A, 50 like B, 20 like both. How many like A only?
22. 80 pupils: 25 like French, 30 like Spanish, 10 like both. How many like neither?
23. 60 students: 18 like dogs only, 12 cats only, 10 both. Find number liking neither.
24. 70 pupils: 25 like apples, 30 oranges, 15 both. How many like at least one?
25. 90 children: 40 like art, 35 like music, 20 both. How many only art?
26. 60 pupils: 20 like Maths only, 15 English only, 10 both. Find neither.
27. 100 people: 40 tea only, 30 coffee only, 10 both. Find % that like neither.
28. 80 people: 25 only A, 30 only B, 15 both. How many neither?
29. 100 children: 30 like cats, 45 like dogs, 15 both. How many like only one?
30. 120 pupils: 50 like A, 60 like B, 20 like both. How many like neither?

---

### ✅ Answers

#### 🔹 Easy

1. 8 + 6 − 4 = 10
2. 10 + 7 − 3 = 14
3️. 15 + 10 − 5 = 20
4️. 6 + 4 + 2 = 12
5️. 25 − 5 = 20
6. 8 − 5 = 3
7. 8 − 4 = 4
8. 9 − 3 = 6
9. (10 − 5) + (15 − 5) = 15
10. 16 − 4 = 12

#### 🔸 Medium

11. 40 − (15 + 10 + 5) = 10
12. (12 − 5) + (10 − 5) = 12
13. 8 + 12 + 5 = 25
14. 100 − (40 + 30 − 20) = 50
15. 20 + 10 + 5 = 35
16. 10 + 15 − 5 = 20
17. 28 − (8 + 10 + 4) = 6
18. 40 − (12 + 15 + 5) = 8
19. 12 + 10 + 6 = 28
20. 25 − (6 + 5 + 4) = 10

#### 🔺 Hard

21. 40 − 20 = 20
22. 80 − (25 + 30 − 10) = 35
23. 60 − (18 + 12 + 10) = 20
24. 25 + 30 − 15 = 40
25. 40 − 20 = 20
26. 60 − (20 + 15 + 10) = 15
27. (40 + 30 + 10 = 80) → 20/100 = 20%
28. 80 − (25 + 30 + 15) = 10
29. (30 − 15) + (45 − 15) = 45
30. 120 − (50 + 60 − 20) = 30

---


#### 🔺 Custom

31. 24 children in a class are asked what activities they do.

    How many do no activities ?
    
    ![vein_diagram_problem](./img/vein_diagram_problem.svg)
    
    

    A) 6 B) 5  C) 4  D) 2  E) 3


<details>
<summary>Solution</summary>

Think of it as a Venn diagram where every region must add up to the total for that club.

We know:

* **Chess club total = 8**
* **Science club total = 9**
* **Cross-country total = 12**

And the overlaps already filled in are:

* Chess & Science only = **2**
* Chess & Cross-country only = **3**
* Science & Cross-country only = **4**
* All three clubs = **1**

Now find how many are in **only** each club.

### 1. Only Chess

Chess total is 8.

Only Chess = 8 - (2 + 3 + 1) = 8 - 6 = 2

### 2. Only Science

Science total is 9.

Only Science = 9 - (2 + 4 + 1) = 9 - 7 = 2


### 3. Only Cross-country

Cross-country total is 12.

Only Cross-country = 12 - (3 + 4 + 1) = 12 - 8 = 4

### 4. Total who do **at least one** activity

Add **all** the regions in the three circles:


2 `only Chess` + 2 `only Science` + 4 `only Cross` + 2 `Chess & Science` + 3 `Chess & Cross` + 4 `Science & Cross` + 1 `all three` = 18

So **18** children do at least one activity.

### 5. How many do no activities?

There are 24 children in the class:

24 - 18 = 6


✅ **Answer: 6 children do no activities.**


</details>