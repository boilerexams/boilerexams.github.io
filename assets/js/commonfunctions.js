function initTopicArray() {
  if(!localStorage.getItem("topicArray")) { //Make the topic array if it doesn't exist for the user already.
  var topicArray = []
    for(var i = 0; i < descriptions.length; i++) {
      topicArray[i] = {
        totalAnswered: 0,
        totalCorrect: 0,
        totalTimed: 0,
        avgTime: 0,
        description: descriptions[i]
      }
    }
    topicArray.push({overallTotalAnswered: 0, overallTotalCorrect: 0, overallTotalTimed: 0, overallAvgTime: 0, updated: 0})
    return(topicArray)
  }
  return(0)
}