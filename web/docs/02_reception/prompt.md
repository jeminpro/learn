You are helping me prepare a large-scale removal of AutoMapper from a C# .NET repository.

IMPORTANT:

* Do NOT remove AutoMapper.
* Do NOT refactor production code.
* Only improve and expand automated tests.
* Goal: create exhaustive regression protection around ALL existing AutoMapper behavior before migration to manual mapping.

Your task:

1. Scan the entire repository for every AutoMapper usage, including:

   * IMapper.Map<T>()
   * mapper.Map(...)
   * ProjectTo<T>()
   * Mapping profiles
   * CreateMap<TSource, TDestination>()
   * custom resolvers
   * converters
   * AfterMap / BeforeMap
   * Include / IncludeBase
   * ReverseMap
   * conditional mappings
   * ignored members
   * nested object mappings
   * collection mappings

2. For EVERY discovered mapping:

   * Locate existing tests first.
   * If coverage is missing or incomplete, create or extend tests.
   * Ensure EVERY mapped destination property is explicitly asserted.
   * Ensure unmapped/ignored properties are intentionally verified.
   * Verify nested object mappings recursively.
   * Verify collection item mappings.
   * Verify enum mappings.
   * Verify nullable handling.
   * Verify null source behavior.
   * Verify default values.
   * Verify custom resolvers and converters.
   * Verify reverse mappings if configured.
   * Verify inheritance mappings if used.
   * Verify flattening/unflattening mappings.
   * Verify DateTime/decimal/string formatting logic if present.

3. Add tests for edge cases:

   * null inputs
   * empty collections
   * partially populated objects
   * missing optional values
   * invalid enum values where relevant
   * deeply nested graphs
   * circular-reference-sensitive areas if applicable

4. Add configuration validation tests:

   * AssertConfigurationIsValid()
   * profile registration validation
   * startup/container registration validation if applicable

5. Prefer:

   * xUnit/NUnit style already used by repository
   * FluentAssertions if already used
   * minimal mocking unless necessary
   * deterministic tests
   * readable Arrange/Act/Assert structure

6. IMPORTANT TEST QUALITY RULES:

   * Avoid shallow tests that only check 1–2 properties.
   * Every mapping test should fail if ANY mapped field changes unexpectedly.
   * Explicit assertions are preferred over snapshot tests.
   * Do not duplicate test helpers unnecessarily.
   * Reuse builders/fixtures already present in repository.
   * Keep tests maintainable and production-grade.

7. Output expectations:

   * Create or update all required test files.
   * Show exactly which mappings are still uncovered.
   * Identify any mappings that are difficult to verify automatically.
   * Flag dangerous mappings with hidden logic or side effects.

8. Coverage objective:

   * Achieve near-complete behavioral coverage of all AutoMapper mappings before migration.
   * Tests should act as a safety net for replacing AutoMapper with manual mapping later.

When generating tests:

* Think like a migration safety auditor.
* Be exhaustive rather than minimal.
* Prioritize correctness and regression detection over brevity.
