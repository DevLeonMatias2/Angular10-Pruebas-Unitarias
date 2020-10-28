import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import {from} from "rxjs";


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService(null);

    beforeEach( () => {
      componente = new MedicosComponent(servicio);

    });


    it('Init: Debe de cargar los medicos', () => {

      const medicos = ['medico1','medicos2','medico3'];

      spyOn( servicio, 'getMedicos').and.callFake(()=>{
        return from([ medicos ]);
      });


      componente.ngOnInit();

      expect( componente.medicos.length).toBeGreaterThan(0);

    });

    it( 'Debe de llamar al servidor para agregar un medico', ()=>{

      spyOn(servicio,"agregarMedico").and.callFake(medico =>{
        return from(  [ medicos ]);
      });
     componente.agregarMedico();

     expect(  espia ).toHaveBeenCalled()
  })


});
