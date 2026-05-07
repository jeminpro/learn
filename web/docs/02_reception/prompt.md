# AutoMapper Test Coverage Expansion Task

You are helping me prepare a large-scale removal of AutoMapper from a C# .NET repository.

---

## IMPORTANT

- Do NOT remove AutoMapper.
- Do NOT refactor production code.
- Only improve and expand automated tests.
- The goal is to create exhaustive regression protection around ALL existing AutoMapper behavior before migrating to manual mapping.

---

## Your Task

### 1. Scan the entire repository for AutoMapper usage, including:

- `IMapper.Map<T>()`
- `mapper.Map(...)`
- `ProjectTo<T>()`
- Mapping profiles
- `CreateMap<TSource, TDestination>()`
- Custom resolvers
- Converters
- `AfterMap` / `BeforeMap`
- `Include` / `IncludeBase`
- `ReverseMap`
- Conditional mappings
- Ignored members
- Nested object mappings
- Collection mappings

---

### 2. For EVERY discovered mapping:

- Locate existing tests first.
- If coverage is missing or incomplete, create or extend tests.
- Ensure EVERY mapped destination property is explicitly asserted.
- Ensure unmapped/ignored properties are intentionally verified.
- Verify nested object mappings recursively.
- Verify collection item mappings.
- Verify enum mappings.
- Verify nullable handling.
- Verify null source behavior.
- Verify default values.
- Verify custom resolvers and converters.
- Verify reverse mappings if configured.
- Verify inheritance mappings if used.
- Verify flattening/unflattening mappings.
- Verify DateTime / decimal / string formatting logic if present.

---

### 3. Add tests for edge cases:

- Null inputs
- Empty collections
- Partially populated objects
- Missing optional values
- Invalid enum values (where relevant)
- Deeply nested object graphs
- Circular-reference-sensitive areas (if applicable)

---

### 4. Add configuration validation tests:

- `AssertConfigurationIsValid()`
- Profile registration validation
- Startup/container registration validation (if applicable)

---

### 5. Preferred test style:

- Use existing framework (xUnit or NUnit)
- Use FluentAssertions if already used in repo
- Avoid heavy mocking unless necessary
- Keep tests deterministic
- Follow Arrange / Act / Assert structure

---

### 6. IMPORTANT TEST QUALITY RULES:

- Avoid shallow tests that only verify 1–2 properties.
- Every mapping test must fail if ANY mapped field changes unexpectedly.
- Prefer explicit assertions over snapshot tests.
- Do not duplicate test helpers unnecessarily.
- Reuse existing builders/fixtures where possible.
- Keep tests maintainable and production-grade.

---

### 7. Output expectations:

- Create or update all required test files.
- Identify mappings that are still uncovered.
- Highlight mappings that are difficult to verify automatically.
- Flag mappings with hidden logic or side effects.

---

### 8. Coverage objective:

- Achieve near-complete behavioral coverage of all AutoMapper mappings before migration.
- Tests must act as a safety net for replacing AutoMapper with manual mapping later.

---

## When generating tests:

- Think like a migration safety auditor.
- Be exhaustive rather than minimal.
- Prioritize correctness and regression detection over brevity.
```