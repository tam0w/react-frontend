const agents_images = {
  Breach: 'https://server.blix.gg/imgproxy/6oKZIAOp6byf3ww1bl9iS7pCGmadK_GRxcyLzuvw6UA/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy81LzUzL0JyZWFjaF9pY29uLnBuZw.webp',
  Jett: 'https://server.blix.gg/imgproxy/duUZ5s7GpMbUVpp0kGvsMik_bQEyrP0ZXfioj6WWj1c/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8zLzM1L0pldHRfaWNvbi5wbmc.webp',
  Kayo: 'https://server.blix.gg/imgproxy/J9idUSaic7E5jz-JnVfqVZQIIfhxIXFkCB5jZ2KXxtg/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy9mL2YwL0tBWU9faWNvbi5wbmc.webp',
  Killjoy: 'https://server.blix.gg/imgproxy/PqoaSntsPnXezjLQyrP_Mki4v9hlBMrEa02DsXaRREk/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8xLzE1L0tpbGxqb3lfaWNvbi5wbmc.webp',
  Astra: 'https://server.blix.gg/imgproxy/S3W6sBwba5wMoUqO4P9okxTgg4nDhSvRD63WTfUiu6A/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8wLzA4L0FzdHJhX2ljb24ucG5n.webp',
    Sage: 'https://server.blix.gg/imgproxy/6oKZIAOp6byf3ww1bl9iS7pCGmadK_GRxcyLzuvw6UA/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy81LzUzL0JyZWFjaF9pY29uLnBuZw.webp',
    Cypher: 'https://server.blix.gg/imgproxy/duUZ5s7GpMbUVpp0kGvsMik_bQEyrP0ZXfioj6WWj1c/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8zLzM1L0pldHRfaWNvbi5wbmc.webp',
    Viper: 'https://server.blix.gg/imgproxy/J9idUSaic7E5jz-JnVfqVZQIIfhxIXFkCB5jZ2KXxtg/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy9mL2YwL0tBWU9faWNvbi5wbmc.webp',
    Omen: 'https://server.blix.gg/imgproxy/PqoaSntsPnXezjLQyrP_Mki4v9hlBMrEa02DsXaRREk/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8xLzE1L0tpbGxqb3lfaWNvbi5wbmc.webp',
    Brimstone: 'https://server.blix.gg/imgproxy/S3W6sBwba5wMoUqO4P9okxTgg4nDhSvRD63WTfUiu6A/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8wLzA4L0FzdHJhX2ljb24ucG5n.webp',
    Sova: 'https://server.blix.gg/imgproxy/6oKZIAOp6byf3ww1bl9iS7pCGmadK_GRxcyLzuvw6UA/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy81LzUzL0JyZWFjaF9pY29uLnBuZw.webp',
    Chamber: 'https://server.blix.gg/imgproxy/duUZ5s7GpMbUVpp0kGvsMik_bQEyrP0ZXfioj6WWj1c/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8zLzM1L0pldHRfaWNvbi5wbmc.webp',
    Raze: 'https://server.blix.gg/imgproxy/J9idUSaic7E5jz-JnVfqVZQIIfhxIXFkCB5jZ2KXxtg/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy9mL2YwL0tBWU9faWNvbi5wbmc.webp',
    Phoenix: 'https://server.blix.gg/imgproxy/PqoaSntsPnXezjLQyrP_Mki4v9hlBMrEa02DsXaRREk/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8xLzE1L0tpbGxqb3lfaWNvbi5wbmc.webp',
    Yoru: 'https://server.blix.gg/imgproxy/S3W6sBwba5wMoUqO4P9okxTgg4nDhSvRD63WTfUiu6A/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy8wLzA4L0FzdHJhX2ljb24ucG5n.webp',
    Skye: 'https://server.blix.gg/imgproxy/6oKZIAOp6byf3ww1bl9iS7pCGmadK_GRxcyLzuvw6UA/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy81LzUzL0JyZWFjaF9pY29uLnBuZw.webp',
  Iso: 'https://server.blix.gg/imgproxy/6oKZIAOp6byf3ww1bl9iS7pCGmadK_GRxcyLzuvw6UA/rs:fit:260:260:0/g:no/aHR0cHM6Ly9zdGF0aWMud2lraWEubm9jb29raWUubmV0L3ZhbG9yYW50L2ltYWdlcy81LzUzL0JyZWFjaF9pY29uLnBuZw.webp',
}


export function SubSubAgentPlayrateTopAgents({currentMap, data}) {


    return (
        <div className={'space-y-3 pt-2'}>
          {data[currentMap].map((agent, index) => {

            if (index === 0) {
              return (
              <div key={index} className={'flex flex-row items-center justify-center'}>
                <img src={agents_images[agent.name]} className={'w-28 h-28'}/>
              </div>
            )
            }
          })
          }
          <div className={'flex flex-row'}>
            {data[currentMap].map((agent, index) => {
              if (index < 5 && index > 0){
              return (
              <div key={index} className={'flex flex-row items-center justify-center space-x-2'}>
                <img src={agents_images[agent.name]} className={'w-12 h-12'}/>
              </div>
            )
            }
            }
            )}
          </div>
        </div>
    )
}