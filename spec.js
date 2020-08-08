describe("Adding", () => {
    it("Adds 1 and 1", () => {
        // Arrange
        cy.visit("http://localhost:8080")

        // Act
        cy.contains("1").click()
        cy.contains("+").click()
        cy.contains("1").click()
        cy.contains("=").click()

        // Assert
        cy.get("#screen").should("have.value", "2")
        
    })
}) 

describe("Division", () => {
    it("Divides 6 by 3", () => {
        // Arrange
        cy.visit("http://localhost:8080")

        // Act
        cy.contains("6").click()
        cy.contains("÷").click()
        cy.contains("3").click()
        cy.contains("=").click()

        // Assert
        cy.get("#screen").should("have.value", "2")
        
    })
}) 

describe("Multiplication", () => {
    it("Multiplies 4 by 5", () => {
        // Arrange
        cy.visit("http://localhost:8080")

        // Act
        cy.contains("4").click()
        cy.contains("x").click()
        cy.contains("5").click()
        cy.contains("=").click()

        // Assert
        cy.get("#screen").should("have.value", "20")
        
    })
}) 

describe("Subtraction", () => {
    it("Subtract 7 from 9", () => {
        // Arrange
        cy.visit("http://localhost:8080")

        // Act
        cy.contains("9").click()
        cy.contains("-").click()
        cy.contains("7").click()
        cy.contains("=").click()

        // Assert
        cy.get("#screen").should("have.value", "2")
        
    })
}) 