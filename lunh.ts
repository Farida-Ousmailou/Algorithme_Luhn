
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
