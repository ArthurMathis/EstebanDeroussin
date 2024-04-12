class horaire{
    constructor(){
        let heures, minutes, secondes;
        this.setHoraire(new Date());

        setInterval(() => {
            this.setHoraire(new Date());
        }, 1000);
    }

    setHeures(instant){ 
        this.heures = instant.getHours(); 
    }
    setMinutes(instant){ 
        this.minutes = instant.getMinutes(); 
    }
    setSecondes(instant){ 
        this.secondes = instant.getSeconds(); 
    }

    setHoraire(instant){
        // On construit notre horaire
        this.setHeures(instant);
        this.setMinutes(instant);
        this.setSecondes(instant);

        // Affichez l'heure actuelle
        console.log(`Il est actuellement ${this.toString()}.`);
    }

    toString() {
        // Ajoutez un 0 devant les nombres si nécessaire
        const heuresStr = this.heures < 10 ? `0${this.heures}` : this.heures;
        const minutesStr = this.minutes < 10 ? `0${this.minutes}` : this.minutes;
        const secondesStr = this.secondes < 10 ? `0${this.secondes}` : this.secondes;

        return `${heuresStr} : ${minutesStr} : ${secondesStr}`;
    }
}

let heure_horloge = new horaire();