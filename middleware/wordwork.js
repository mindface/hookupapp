const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database(__dirname+'/aid/wnjpn.db')

const word = process.argv[2]

export class WordSimilar {
  constructor(text){
    this.wordsql = `SELECT sense.synset AS synset FROM word JOIN sense ON sense.wordid=word.wordid WHERE lemma = '${text}'`
  }
  doing(){
    let return_data = []
    return new Promise( (resolve,reject) => {
      db.all((this.wordsql), (worderr, wordrows) => {
      if (wordrows && wordrows.length > 0) {
        const wordrow = wordrows[0];
          const sql = `SELECT word.lemma AS lemma FROM sense JOIN word ON word.wordid = sense.wordid WHERE sense.synset = '${wordrow.synset}'`;
          db.all(sql, (synoerr, synorows) => {
            for(let synorow of synorows) {
              // console.log(synorow.lemma);
              return_data.push(synorow.lemma)
            }
            resolve(return_data)
          });
      } else {
        console.warn("no word");
      }});
    })
    db.close()
   }
}
