import assert from 'assert'
import {AgentConnection} from "../AgentConnection";

describe('Agent Connection', ()=> {

	it('can connect to agent server', (done)=> {
		const agentConnection = AgentConnection()
		agentConnection.onConnect(()=> {
			done()
		})
	})

	describe('handles', ()=> {
		const agentConnection = AgentConnection()
		it('context-found messages', (done)=> {

			agentConnection.onContextFound(()=> {
				done()
			})

			agentConnection._handleMessage({data: JSON.stringify({event: 'context-found'})})
		})

		it('search-results messages', (done)=> {

			agentConnection.onSearchResults(()=> {
				done()
			})

			agentConnection._handleMessage({data: JSON.stringify({event: 'search-results'})})
		})
	})

})