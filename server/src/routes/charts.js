var express = require('express');
const { conn } = require('../databases/db');
var router = express.Router();


router.get('/skills', (req, res, next) => {
    let skills;
    let count;
    conn.query('SELECT s.name as skill, count(p.id) as count FROM `projects` as p, `projects-skills` as ps, `skills` as s WHERE (p.id = ps.projectId) AND (s.id = ps.skillId) group by (s.name);')
    .then((result) =>{
            console.log(result);
            count = result[0].map((c)=>{
                return c.count;
            });
            skills = result[0].map((c)=>{
                return c.skill;
            });

        }
    ).then(()=>{
        res.status(200).send({"skill":skills, "count":count});
        
    })  
});

router.get('/categories' , (req, res, next) => {
        let categories;
        let count;
        conn.query('SELECT mainCategory as category,count(id) as count from projects group by (mainCategory);')
        .then((result) =>{
            
                count = result[0].map((c)=>{
                    return c.count;
                });
                categories = result[0].map((c)=>{
                    return c.category;
                });
            }
        ).then(()=>{
            res.status(200).send({"category":categories, "count":count});
            
        })    
});


router.get('/is_subject', (req,res,next)=>{
    let isSubject;
    let count;
    conn.query('SELECT isSubject,count(id) as count from applications as a group by ( a.isSubject);')
    .then((result) =>{
        
            count = result[0].map((c)=>{
                return c.count;
            });
            isSubject = result[0].map((c)=>{
                return c.isSubject;
            });
        }
    ).then(()=>{
        res.status(200).send({"isSubject":isSubject, "count":count});
        
    })    

    
});

router.get('/school', (req,res,next)=>{
    let faculty;
    let count;
    conn.query('SELECT sd.faculty, count(u.id) as count FROM users as u, studentDetails as sd WHERE (u.id = sd.id) GROUP BY (faculty) ;')
    .then((result) =>{
            console.log(result);
            count = result[0].map((c)=>{
                return c.count;
            });
            faculty = result[0].map((c)=>{
                return c.faculty;
            });

        }
    ).then(()=>{
        res.status(200).send({"faculty":faculty, "count":count});
        
    }) 

});

module.exports = router;
