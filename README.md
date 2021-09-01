# web-test-codeceptjs

Web test with CodeceptJS

### Installation

```
npm i
```
### Execution

#### All tests

```
npm run test                                        # Run all tests
WORKERS=10 npm run parallel                         # Run all tests in parallel with 10 workers
```

#### Run specifics tests

```
TAGS=PeopleSearch npm run tags                      # Run tests with tag "PeopleSearch"
TAGS='PeopleCreate|PeopleEdit' npm run tags         # Run tests with tags "PeopleCreate" or "PeopleEdit"
TAGS='(?=.*Confirm)^(?!.*All)' npm run tags         # Run tests with tags "Confirm" but without tags "All"
```

#### Run setting an specific helper

```
HELPER=puppeteer npm run test
```