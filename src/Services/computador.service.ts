import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Computador } from "../Model/computador.dto";
import { API_CONFIG } from "../CONFIG/api.config";


@Injectable()
export class ComputadorService {


    constructor(public http: HttpClient) {

    }


    findById(id: String): Observable<Computador> {
        return this.http.get<Computador>(`${API_CONFIG.baseUrl}/computador/busca/id/${id}`);
    }

    findByAtivo(ativo: String): Observable<Computador> {
        return this.http.get<Computador>(`${API_CONFIG.baseUrl}/computador/busca/id/${ativo}`);
    }

    findAll(): Observable<Computador[]> {
        return this.http.get<Computador[]>(`${API_CONFIG.baseUrl}/computador/ativo`);
    }

    insertComputador(computador : Computador){
        return this.http.post(
            `${API_CONFIG.baseUrl}`,
            computador,
            {
                observe : 'response',
                responseType : 'text'
            }
        )
    }

    deleteComputador(id : string){
        return this.http.delete(`${API_CONFIG.baseUrl}/computador/${id}`)
    }
}