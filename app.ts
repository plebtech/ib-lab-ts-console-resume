// variables.
let myName: string = 'Nick Mc';
let myField: string = 'Software Development';
let myDesc = 'Strong analytical mind with a keen interest in solving problems.';
let interests: string[] = [
    'Back End Development',
    'Discord bots',
    'I/O',
    'Synthwave'
];

interface ResumePosition {
    company: string;
    title: string;
    desc: string;
}
let positions: ResumePosition[] = [
    {
        company: 'H&R Block',
        title: 'Field Services Technician',
        desc: 'Serviced printers and plugged stuff in.'
    },
    {
        company: 'Halliburton',
        title: 'Operator Assistant I',
        desc: 'Rigged up and broke down oil field services equipment/pipes. Drove a truck.'
    },
    {
        company: "Foosackly's",
        title: 'Cook',
        desc: 'Food preparation. Cooked chicken fingers and french fries.'
    }
];

interface ResumeSkills {
    name: string;
    cool: boolean;
}
let skills: ResumeSkills[] = [
    {
        name: 'HTML',
        cool: false
    },
    {
        name: 'CSS',
        cool: false
    },
    {
        name: 'JavaScript',
        cool: true
    },
    {
        name: 'Java',
        cool: false
    },
    {
        name: 'C#',
        cool: false
    },
    {
        name: 'AWS',
        cool: true
    }
]
console.log(myName.toUpperCase());
console.log(myField);
console.log(myDesc);
logSpace();
logInterests();
logSpace();
logPast();
displaySkill(skills);

// print blank line.
function logSpace(): void {
    console.log(" ");
}

// steps through all interests.
function logInterests(): void {
    console.log('Interests:');
    for (let i in interests) {
        console.log(interests[i]);
    }
}

// steps through all positions in an array of objects and passes each one to displayPosition function.
function logPast(): void {
    console.log('Experience:');
    for (let i in positions) {
        displayPosition(positions[i].company, positions[i].title, positions[i].desc);
    }
    logSpace();
}

// print the elements of a position object in certain format.
function displayPosition(company: string, title: string, desc: string): void {
    console.log(title + " at " + company + " - " + desc);
}

// checks if a skill is cool and prints it.
function displaySkill(skills: ResumeSkills[]): void {
    for (let i in skills) {
        if (skills[i].cool === true) {
            console.log("BAM: " + skills[i].name);
        } else {
            console.log(skills[i].name);
        }
    }

}