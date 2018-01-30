# ng-lz-string

## Installation

To install this library, run:

```bash
$ npm install ng-lz-string --save
```

## Usage

Here's how you can use this library in your Angular app:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { LZStringModule, LZStringService } from 'ng-lz-string';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the LZ String Module as an import
    LZStringModule
  ],
  providers: [
	// Specify the service in the providers section
	LZStringService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported in your module, you can use it in your Angular application:

```typescript
import ....your imports....
import {LZStringService} from 'ng-lz-string';

class AppComponent implements OnInit {
	constructor(private lz: LZStringService) {
	
	}
	
	performCompressionAndDecompression() {
		const compressed = this.lz.compress('This is going to be compressed');
		
		console.log(compressed);
		
		const decompressed = this.lz.decompress(compressed);
		
		console.log(decompressed);
	}
}
```

