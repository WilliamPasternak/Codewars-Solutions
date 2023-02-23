Multi-tap Keypad Text Entry on an Old Mobile Phone

For this assignment, write a module that can calculate the amount of button presses required for any phrase. Punctuation can be ignored for this exercise. Likewise, you can assume the phone doesn't distinguish between upper/lowercase characters (but you should allow your module to accept input in either for convenience).

------- ------- -------
|     | | ABC | | DEF |
|  1  | |  2  | |  3  |
------- ------- -------
------- ------- -------
| GHI | | JKL | | MNO |
|  4  | |  5  | |  6  |
------- ------- -------
------- ------- -------
|PQRS | | TUV | | WXYZ|
|  7  | |  8  | |  9  |
------- ------- -------
------- ------- -------
|     | |space| |     |
|  *  | |  0  | |  #  |
------- ------- -------


function presses(msg) {
  // Group chars by num of key presses it takes to reach them
  const [  onePress,       twoPress,   threePress, fourPress,  fivePress] = 
        ['1*#adgjmptw ',  '0behknqux', 'cfilorvy', '234568sz',   '79'   ]
  
  let btnPresses = 0
  
  // For each character in provided phrase, count key presses
  msg.toLowerCase().split('').forEach(char => countKeyPresses(char))
  return btnPresses
  
  // This function will add # of presses needed for each char typed to total btnPresses 
  function countKeyPresses(char){
    if(onePress.includes(char)) btnPresses += 1
    else if(twoPress.includes(char)) btnPresses += 2
    else if(threePress.includes(char)) btnPresses += 3
    else if(fourPress.includes(char)) btnPresses += 4
    else if(fivePress.includes(char)) btnPresses += 5
  }
}