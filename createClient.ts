import { createFromRoot } from "codama";
import type { AnchorIdl } from "@codama/nodes-from-anchor";
import { renderJavaScriptVisitor } from "@codama/renderers";
import { rootNodeFromAnchor } from "@codama/nodes-from-anchor";
import TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp from "./idl/TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp_286033752.json";
import TB1Dqt8JeKQh7RLDzfYDJsq8KS4fS2yt87avRjyRxMv from "./idl/TB1Dqt8JeKQh7RLDzfYDJsq8KS4fS2yt87avRjyRxMv_212789681.json";
import TSWAPaqyCSx2KABk68Shruf4rp7CxcNi8hAsbdwmHbN from "./idl/TSWAPaqyCSx2KABk68Shruf4rp7CxcNi8hAsbdwmHbN_250020443.json";

const TensorCNFTProgram =
  TCMPhJdwDryooaGtiocG1u3xcYbRpiJzb283XfCZsDp as AnchorIdl;

const TensorBidProgram =
  TB1Dqt8JeKQh7RLDzfYDJsq8KS4fS2yt87avRjyRxMv as AnchorIdl;

const TensorSwapProgram =
  TSWAPaqyCSx2KABk68Shruf4rp7CxcNi8hAsbdwmHbN as AnchorIdl;

const TensorCNFTProgramCodama = createFromRoot(
  rootNodeFromAnchor(TensorCNFTProgram),
);

TensorCNFTProgramCodama.accept(
  renderJavaScriptVisitor("clients/TensorCNFTProgram"),
);

const TensorBidProgramCodama = createFromRoot(
  rootNodeFromAnchor(TensorBidProgram),
);

TensorBidProgramCodama.accept(
  renderJavaScriptVisitor("clients/TensorBidProgram"),
);

const TensorSwapProgramCodama = createFromRoot(
  rootNodeFromAnchor(TensorSwapProgram),
);

TensorSwapProgramCodama.accept(
  renderJavaScriptVisitor("clients/TensorSwapProgram"),
);
