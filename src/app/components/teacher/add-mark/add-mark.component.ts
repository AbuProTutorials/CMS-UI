import { Component } from '@angular/core';
import { AddMark } from '../../../models/add-mark';
import { AddMarkService } from '../../../services/add-mark.service';
import { AddcoinService } from '../../../services/addcoin.service';
import { Addcoin } from '../../../models/addcoin';

@Component({
  selector: 'app-add-mark',
  templateUrl: './add-mark.component.html',
  styleUrl: './add-mark.component.scss'
})
export class AddMarkComponent {
addmark!:AddMark
add_coin : Addcoin = {id : "",coin : 5}

  
  constructor(private addmarkService:AddMarkService,private addcoinService:AddcoinService){
    this.getall()
    
    console.log(this.numbers)
  }

  getall(){
    this.addmarkService.getAllAddMark().subscribe({
      next:(data)=>{
        this.addmark=data
        console.log(data)
        if (this.addmark != null) {
          if (this.addmark.$values != null) { 
            for (let index = 0; index < this.addmark.$values.length; index++) {
              this.numbers.push(index)     
            }
          }
        }
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

  numbers : number[] = []
  addcoin(){
    for (let index = 0; index < this.addmark.$values.length; index++) {
      if (this.addmark != null) {
        if (this.addmark.$values != null) {
          if (this.addmark.$values[index] != null) {
            if (this.addmark.$values[index].id != null) {
              const coinInput = document.getElementById(`mark_${index}`)as HTMLInputElement
              if (coinInput != null) {
                if (coinInput.value != null) {
                        this.add_coin.id = this.addmark.$values[index].id
                        this.add_coin.coin = Number(coinInput.value)
                        this.addcoinService.AddCoins(this.add_coin).subscribe({
                          next:(data)=>{
                            this.add_coin=data
                            console.log(data)
                          },
                          error:(err)=>{
                            console.log(err)
                          }
                        })
                      }
                    }
            }
          }
        }
      }
    }

  }
}
