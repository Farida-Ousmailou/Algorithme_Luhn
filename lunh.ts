
const argument = process.argv[3]




function rever(arg: string): string[] {
    try {
        const arg_ = arg.split("").reverse()
        return arg_
    } catch {
        console.log("une erreur est survenue")
    }
    return []
}





function multiplication(arg): number[] {
    try {
        const array_arg = arg.split("").reverse()

        const first_num = parseInt(array_arg[0])



        let array_revisit: number[] = []
        array_revisit.push(first_num)


        for (let i: number = 1; i < array_arg.length; i++) {

            let x_int: number = parseInt(array_arg[i])
            let i_position = i % 2

            if (i_position != 0) {

                let x_int_double = x_int * 2

                let x_init_sup = x_int_double.toString().split("")
                let x_init_inf = parseInt(x_init_sup[0]) + parseInt(x_init_sup[1])

                if (x_int_double > 9) {
                    array_revisit.push(x_init_inf)

                } else {
                    array_revisit.push(x_int_double)
                }
            } else {

                array_revisit.push(x_int)

            }
        }
        return array_revisit
    } catch {
        console.log("une erreur est survenue")
    } 
}
// console.log(rever(argument))

function main() {

    try {
        let array_revisit = multiplication(argument)
        let somme = 0
        if (process.argv[2] === "-c" && argument.length === 16) {
            for (let i: number = 0; i < array_revisit.length; i++) {
                somme += array_revisit[i]
            }
            console.log(somme)

            if (somme % 10 === 0) {
                console.log("OK")
            } else {
                console.log("KO")

            }
        } else if (process.argv[2] === "-f" && argument.length === 15) {

            const array_arg = argument.split("").reverse()

            array_arg.splice(0, 0, "0")

            let array_revisit_f: number[] = []
            array_revisit.push(0)

            for (let i: number = 1; i < array_arg.length; i++) {

                let x_int: number = parseInt(array_arg[i])
                let i_position = i % 2

                if (i_position != 0) {

                    let x_int_double = x_int * 2

                    let x_init_sup = x_int_double.toString().split("")
                    let x_init_inf = parseInt(x_init_sup[0]) + parseInt(x_init_sup[1])

                    if (x_int_double > 9) {
                        array_revisit_f.push(x_init_inf)

                    } else {
                        array_revisit_f.push(x_int_double)
                    }
                } else {

                    array_revisit_f.push(x_int)

                }

            }
        }
    } catch {
        console.log("une erreur est survenue")
    }
}


main()
