json.array!(@signed_documents) do |signed_document|
  json.extract! signed_document, :id, :document_id, :signer_name, :signer_signature
  json.url signed_document_url(signed_document, format: :json)
end
