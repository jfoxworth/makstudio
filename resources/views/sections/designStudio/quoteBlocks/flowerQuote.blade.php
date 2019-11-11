<!-- Bench Quote Modal -->
<div class="modal fade" 
	 id="flowerQuoteModal" 
	 tabindex="-1" 
	 role="dialog" 
	 aria-labelledby="exampleModalLabel" 
	 aria-hidden="true">

	<div class="modal-dialog" 
		 role="document"
		 style="min-width:600px">

		<div class="modal-content">

	  		<div class="modal-header btn-primary">

				<h5 class="modal-title btn-primary" id="exampleModalLabel">Finish Quote</h5>
		
				<button type="button" class="close btn-primary" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
	
			<div class="modal-body"
				 style="width:500px">
				
				<table class="modalTable center"
					   style="width:500px; margin-left:25px">

					<tr style="height:35px; border-bottom:1px solid #ccc; font-weight:bold">
						<th style="width:400px">Quantity</th>
						<th>Amount</th>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Wall Height</td><td id="flowerWallHeightQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Wall Width</td><td id="flowerWallWidthQuote"></td>
					</tr>

					<tr style="height:30px; border-bottom:1px solid #ccc">
						<td>Number of Flowers</td><td id="flowerWallNumbersQuote"></td>
					</tr>

				</table>

			</div>

			@guest
				<div class="divcenter center">
					<h4>Enter the email for the quote</h4>
					<input id="guestEmail" style="width:100%; margin-bottom:20px">
				</div>
			@endguest

			<div class="modal-footer">
				<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
				<button type="button" class="btn btn-primary getQuote">Send Me Quote</button>
			</div>
	
		</div>
	
	</div>

</div>
