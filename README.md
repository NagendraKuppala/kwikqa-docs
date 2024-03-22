# KWIKQA: Reliable and Fast End-to-End Test Automation Framework for Modern Web Apps
## KWIKQA enables automation testing ASAP(As Simple As Possible)
KWIKQA is a robust, efficient, end-to-end test automation framework designed specifically for modern web applications. With KWIKQA, you can automate your tests as simple as possible (ASAP), enabling faster testing cycles and ensuring the reliability of your applications.

## Key Features

- **Modular Architecture:** KWIKQA is built with a modular architecture, making it highly maintainable and easy to extend.
- **Data-Driven Testing:** Easily manage and execute tests using external data sources such as Excel files.
- **Failure Handling:** Flexible failure handling strategies ensure seamless test execution and easy debugging.
- **Playwright Integration:** Seamlessly integrates with Playwright for cross-browser testing capabilities.
- **Keyword-Driven Testing:** Implement tests using keywords, making test cases highly readable and understandable.
- **CI/CD Ready:** Designed for easy integration with Continuous Integration/Continuous Deployment pipelines for automated testing workflows.
- **Error Logging:** Comprehensive error logging ensures easy tracking and debugging of issues.

## Getting Started

### Prerequisites

- Node.js (version 18.18.2)
- npm (version 9.8.1)
- Playwright (version 1.40.0)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/kwikqa.git
    ```

2. Install dependencies:

    ```bash
    cd kwikqa
    npm install
    ```

### Usage

1. Prepare your test suite, test cases, and test data in Excel files according to the provided structure.
2. Update `playwright.config.ts` with your desired configurations.
3. Execute your tests using the provided `testrunner.spec.ts` file.

    ```bash
    npx playwright test
    ```

### Tests Structure Example

    Tests 
    -----
    
        |-- tests/
        |       |-- Test_Suites.xlsx
        |       |-- Test_Cases/
        |       |   |-- {TestSuiteID}.xlsx
        |               |-- {TestCaseID}
        |       |-- Data_Files/
        |       |   |-- TD_{TestSuiteID}.xlsx
        |               |-- {TestCaseID}
        |       |-- Object_Repository.xlsx
        |       |-- ExecutionProfile.properties
    
    
    Excel Files Structure
    ---------------------

    **Test_Suites.xlsx:**
    - Sheet1 (TestSuites):
    | TestSuiteID | Description | Runmode |
    |-------------|-------------|---------|
    | TS1         | testing     | Y       |
    | TS2         | testing     | N       |

    - Sheet2 (TS1):
    | TestCaseID | Description | Runmode |
    |------------|-------------|---------|
    | TC1        | testing     | Y       |
    | TC2        | testing     | N       |

    - Sheet3 (TS2):
    | TestCaseID | Description | Runmode |
    |------------|-------------|---------|
    | TC1        | testing     | Y       |
    | TC2        | testing     | N       |

    **Test_Cases/TS1.xlsx:**
    - Sheet (TC1):
    | Keyword | Object                   | Data        | Output | FailureHandling | Description    |
    |---------|--------------------------|-------------|--------|-----------------|----------------|
    | step1   | #OR_Page1_objectname1    |   ${data1}  |        |                 |                |
    | step2   | #OR_Page1_objectname2    |   ${data2}  |        |                 |                |

    - Sheet (TC2):
    | Keyword | Object                   | Data        | Output | FailureHandling | Description    |
    |---------|--------------------------|-------------|--------|-----------------|----------------|
    | step1   | #OR_Page2_objectname1    |   ${data1}  |        |                 |                |
    | step2   | #OR_Page2_objectname2    |   ${data2}  |        |                 |                |

    **Test_Cases/TS2.xlsx**:
    - Similar structure as TS1.xlsx

    **Object_Repository.xlsx:** POM Pattern
    - Sheet (Page1):
    |    Object   |  Locator |
    |-------------|----------|
    | objectname1 |   path   |
    | objectname2 |   path   |

    - Sheet (Page2):
    |    Object   |  Locator |
    |-------------|----------|
    | objectname1 |   path   |
    | objectname2 |   path   |

    **Data_File/TD_TS1.xlsx:**:
    - Sheet (TC1):
      | data1 | data2   |
      |-------|---------|
      |  A1   |  B1     |
      |  A1   |  B1     |

      - Sheet (TC2):
      | data1 | data2   |
      |-------|---------|
      |  A1   |  B1     |
      |  A1   |  B1     |
    

## License

This project is licensed under the XYZ License - see the [LICENSE](LICENSE) file for details.
