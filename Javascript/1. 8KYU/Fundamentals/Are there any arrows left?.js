You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.
You need to verify that you have some good ones left, in order to prepare for battle:

function anyArrows(arrows){
  // Establish starting arrow count
  let arrowCount = arrows.length
  // Check all arrows for damage and deduct from arrow count
  for (let i = 0; i < arrows.length; i++) {
    let currentArrow = arrows[i]
    // If current arrow is damaged, reduce arrow count.
    if (currentArrow.damaged){
      arrowCount--
    }
  }
  return arrowCount > 0
}


Using built in method 'some'
function anyArrows(arrows){
  return arrows.some(a => !a.damaged);
}