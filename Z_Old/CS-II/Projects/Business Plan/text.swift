@main
public struct Lindenmayer {
    public private(set) var text = "Hello, World!"

    public static func main() {
        print(Lindenmayer().text)
    }
}
 
class ProductionRule {
    let predecessor : Character
    let successor : String

    init(predecessor: Character, successor: String) {
        self.predecessor = predecessor
        self.successor = successor
    }

    
}

class LSystem {
    let alphabet : Set<Character>
    let axiom : String
    let productionRules : Set<ProductionRule>

    init(alphabet: [Character], axiom: String, productionRules: [ProductionRule]){
        self.alphabet = alphabet
        self.axiom = axiom
        self.productionRules = productionRules
    }
    
    func nonTerminals() -> Set<Character> {
        var nonTerminals = Set<Character>()
        
        for letter in self.alphabet {
            for productionRule in productionRules {
                if letter == productionRule.predecessor && productionRule.predecessor != productionRule.successor {
                    nonTerminals.append(letter)
                }
            }       
        }
        return nonTerminals
    }

    

    func terminals -> Set<Character> {
        var terminals = Set<Character>()

        for letter in self.alphabet {
            for productionRule in self.productionRules {
                if letter == productionRule.predecessor && productionRule.predecessor == productionRule.successor {
                    terminals.append(letter)
                }
            }
        }
        return terminals
    }


    func produce(generationCount: Int) -> String {
        var result = ""

        
        for character in self.axiom {

            if generationCount > 1 {
                
            for productionRule in self.productionRules {
                if character == productionRule.predecessor {
                    result += productionRule.successor
                }

            }

            return produce(generationCount: generationCount-1)
            } else {
                return result
            }
        }
    }
    


    

    
}
    

let productionRules = [ProductionRule(predecessor: "1", successor: "11"), ProductionRule(predecessor: "0", successor: "1[0]0")]

let lSystem = LSystem(alphabet:["0", "1", "[", "]"], axiom:"0", productionRules:productionRules)

print(lSystem.produce(generationCount: 1))
