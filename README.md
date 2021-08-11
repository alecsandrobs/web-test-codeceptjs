# web-test-codeceptjs

Web test with CodeceptJS

### Installation

```
npm i
```
### Execution

#### All tests

```
npm run test
```

#### Run specifics tests

```
TAGS=PeopleSearch npm run tags                      # Run tests with tag "PeopleSearch"
TAGS='PeopleCreate|PeopleEdit' npm run tags           # Run tests with tags "PeopleCreate" or "PeopleEdit"
TAGS='(?=.*Confirm)^(?!.*All)' npm run tags         # Run tests with tags "Confirm" but without tags "All"
```
