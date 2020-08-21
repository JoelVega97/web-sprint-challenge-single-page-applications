import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
    .string()
    .min(2, 'Name must be longer than 2 characters')
    .required('Must include a name.'),

    size: yup
    .string()
    .oneOf(['small', 'medium', 'large', 'uge'], 'You must select a size')
    .required('You must select a size'),

    specialInfo: yup
    .string()
})

export default formSchema