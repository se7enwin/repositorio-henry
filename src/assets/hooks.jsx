export default function useFormulario(numberInputs,onSubmit) {

    return (
    
    <div>
         
         <form onSubmit={onSubmit}></form>
         {numberInputs.map((el) => (
         <input/>
         ))}
         </div>
         );
}

    export function useLogin(user,credentials) {

        return {};

    }


//hooksPersonalizados
    
